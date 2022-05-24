#!/usr/bin/env node

/**
 * Generate parser function using LALR algorithm.
 * @author yiminghe@gmail.com
 */
var argv = require('optimist')
        .demand('g')
        .alias('g', 'grammar')
        .describe('g', 'kison grammar file')
        .alias('p', 'path')
        .describe('p', 'generated file path')
        .alias('m', 'module')
        .describe('m', 'generated kissy module name')
        .describe('e', 'xtemplate file encoding')
        .alias('encoding', 'e')
        .describe('w', 'watch xtemplate file change')
        .boolean('w')
        .describe('compressSymbol', 'compress symbol')
        .boolean('compressSymbol')
        .default('compressSymbol', true)
        .describe('compressLexerState', 'compress lexer state')
        .boolean('compressLexerState')
        .default('compressLexerState', false)
        .alias('watch', 'w')
        .usage('generate kissy module file from kison grammar file.\n' +
        'usage: $0 -g [grammar file] -m [module name]').argv,

    S = require('../build/kissy-nodejs'),

    js_beautify = require('js-beautify').js_beautify,
    fs = require('fs'),
    m_path = argv.path,
    path = require('path'),
    grammar = path.resolve(argv.grammar),
    encoding = argv.e || 'utf-8';


var kisonCfg = {
    compressLexerState: argv.compressLexerState,
    compressSymbol: argv.compressSymbol
};

// S.log('*********** grammar:');
// S.log(grammar);

var grammarBaseName = path.basename(grammar, '-grammar.kison');

// S.log('*********** grammarBaseName:');
// S.log(grammarBaseName);

var modulePath;

if (m_path) {
    // S.log('*********** m_path:');
    m_path = path.resolve(m_path) + '/';
    modulePath = m_path + grammarBaseName + '.js';
} else {
    modulePath = path.resolve(grammar, '../' + grammarBaseName + '.js');
}

// S.log('*********** modulePath:');
// S.log(modulePath);

var codeTemplate = '' +
    '/*\n' +
    '  Generated by kissy-kison.' +
    '*/\n' +
    'KISSY.add({module} function(){\n' +
    '{code};\n' +
    '});';

var module = argv.module || '';

if (module) {
    module = '"' + module + '",';
}

function my_js_beautify(str) {
    //return str;
    var opts = {"indent_size": "4", "indent_char": " ",
        "preserve_newlines": true, "brace_style": "collapse",
        "keep_array_indentation": false, "space_after_anon_function": true};
    return js_beautify(str, opts);
}


S.use('kison', function (S, KISON) {

    function genParser() {

        var grammarContent = fs.readFileSync(grammar, encoding);
        //// S.log('*********** grammarContent:');
        //// S.log(grammarContent);

        console.info('start generate grammar module: ' + modulePath + '\n');
        var start = S.now();

        var code = new KISON.Grammar(eval(grammarContent)).genCode(kisonCfg);

        var moduleCode = my_js_beautify(S.substitute(codeTemplate, {
            module: module,
            code: code
        }));

        //// S.log(moduleCode);

        fs.writeFileSync(modulePath, moduleCode, encoding);

        console.info('generate grammar module: ' + modulePath + ' at ' + (new Date().toLocaleString()));
        console.info('duration: ' + (S.now() - start) + 'ms');

    }

    var bufferCompile = S.buffer(genParser);

    if (argv.watch) {
        fs.watch(grammar, bufferCompile);
        genParser();
    } else {
        bufferCompile();
    }

});