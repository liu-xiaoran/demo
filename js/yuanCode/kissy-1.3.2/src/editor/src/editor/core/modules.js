/*Generated by KISSY Module Compiler*/
KISSY.config('modules', {
'editor/plugin/heading/cmd': {requires: ['editor']},
'editor/plugin/page-break/index': {requires: ['editor','editor/plugin/fake-objects/']},
'editor/plugin/italic/cmd': {requires: ['editor','editor/plugin/font/cmd']},
'editor/plugin/font-size/cmd': {requires: ['editor','editor/plugin/font/cmd']},
'editor/plugin/image/dialog': {requires: ['ajax','editor','editor/plugin/overlay/','tabs','editor/plugin/menubutton/']},
'editor/plugin/underline/index': {requires: ['editor','editor/plugin/font/ui','editor/plugin/underline/cmd']},
'editor/plugin/maximize/cmd': {requires: ['editor']},
'editor/plugin/contextmenu/index': {requires: ['editor','menu','editor/plugin/focus-fix/']},
'editor/plugin/heading/index': {requires: ['editor','editor/plugin/heading/cmd']},
'editor/plugin/drag-upload/index': {requires: ['editor']},
'editor/plugin/color/cmd': {requires: ['editor']},
'editor/plugin/code/index': {requires: ['editor','editor/plugin/dialog-loader/']},
'editor/plugin/flash/dialog': {requires: ['editor','editor/plugin/flash-common/utils','editor/plugin/overlay/','editor/plugin/menubutton/']},
'editor/plugin/strike-through/cmd': {requires: ['editor','editor/plugin/font/cmd']},
'editor/plugin/unordered-list/index': {requires: ['editor','editor/plugin/list-utils/btn','editor/plugin/unordered-list/cmd']},
'editor/plugin/outdent/cmd': {requires: ['editor','editor/plugin/dent-utils/cmd']},
'editor/plugin/italic/index': {requires: ['editor','editor/plugin/font/ui','editor/plugin/italic/cmd']},
'editor/plugin/remove-format/cmd': {requires: ['editor']},
'editor/plugin/font-size/index': {requires: ['editor','editor/plugin/font/ui','editor/plugin/font-size/cmd']},
'editor/plugin/indent/cmd': {requires: ['editor','editor/plugin/dent-utils/cmd']},
'editor/plugin/table/index': {requires: ['editor','editor/plugin/dialog-loader/','editor/plugin/contextmenu/']},
'editor/plugin/word-filter/dynamic/index': {requires: ['htmlparser']},
'editor/plugin/justify-left/cmd': {requires: ['editor/plugin/justify-utils/cmd']},
'editor/plugin/resize/index': {requires: ['editor','dd/base']},
'editor/plugin/video/dialog': {requires: ['editor','editor/plugin/flash/dialog','editor/plugin/menubutton/']},
'editor/plugin/focus-fix/index': {requires: ['editor']},
'editor/plugin/xiami-music/index': {requires: ['editor','editor/plugin/flash-common/baseClass','editor/plugin/flash-common/utils','editor/plugin/fake-objects/']},
'editor/plugin/maximize/index': {requires: ['editor','editor/plugin/maximize/cmd']},
'editor/plugin/color/color-picker/dialog': {requires: ['editor','editor/plugin/overlay/']},
'editor/plugin/smiley/index': {requires: ['editor','editor/plugin/overlay/']},
'editor/plugin/separator/index': {requires: ['editor']},
'editor/plugin/video/index': {requires: ['editor','editor/plugin/flash-common/utils','editor/plugin/flash-common/baseClass','editor/plugin/fake-objects/']},
'editor/plugin/multiple-upload/index': {requires: ['editor','editor/plugin/dialog-loader/']},
'editor/plugin/undo/btn': {requires: ['editor','editor/plugin/button/']},
'editor/plugin/menubutton/index': {requires: ['editor','menubutton']},
'editor/plugin/flash/index': {requires: ['editor','editor/plugin/flash-common/baseClass','editor/plugin/flash-common/utils','editor/plugin/fake-objects/']},
'editor/plugin/overlay/index': {requires: ['editor','overlay','editor/plugin/focus-fix/','dd/plugin/constrain','component/plugin/drag']},
'editor/plugin/link/utils': {requires: ['editor']},
'editor/plugin/xiami-music/dialog': {requires: ['editor','editor/plugin/flash/dialog','editor/plugin/menubutton/']},
'editor/plugin/list-utils/cmd': {requires: ['editor','editor/plugin/list-utils/']},
'editor/plugin/button/index': {requires: ['editor','button']},
'editor/plugin/checkbox-source-area/index': {requires: ['editor']},
'editor/plugin/strike-through/index': {requires: ['editor','editor/plugin/font/ui','editor/plugin/strike-through/cmd']},
'editor/plugin/fore-color/index': {requires: ['editor','editor/plugin/color/btn','editor/plugin/fore-color/cmd']},
'editor/plugin/flash-bridge/index': {requires: ['swf','editor']},
'editor/plugin/fore-color/cmd': {requires: ['editor/plugin/color/cmd']},
'editor/plugin/table/dialog': {requires: ['editor','editor/plugin/overlay/','editor/plugin/menubutton/']},
'editor/plugin/justify-utils/cmd': {requires: ['editor']},
'editor/plugin/undo/index': {requires: ['editor','editor/plugin/undo/btn','editor/plugin/undo/cmd']},
'editor/plugin/justify-right/cmd': {requires: ['editor/plugin/justify-utils/cmd']},
'editor/plugin/image/index': {requires: ['editor','editor/plugin/button/','editor/plugin/bubble/','editor/plugin/contextmenu/','editor/plugin/dialog-loader/']},
'editor/plugin/dent-utils/cmd': {requires: ['editor','editor/plugin/list-utils/']},
'editor/plugin/ordered-list/cmd': {requires: ['editor','editor/plugin/list-utils/cmd']},
'editor/plugin/list-utils/index': {requires: ['editor']},
'editor/plugin/dialog-loader/index': {requires: ['overlay','editor']},
'editor/plugin/flash-common/utils': {requires: ['swf']},
'editor/plugin/font-family/index': {requires: ['editor','editor/plugin/font/ui','editor/plugin/font-family/cmd']},
'editor/plugin/undo/cmd': {requires: ['editor']},
'editor/plugin/indent/index': {requires: ['editor','editor/plugin/indent/cmd']},
'editor/plugin/font/cmd': {requires: ['editor']},
'editor/plugin/ordered-list/index': {requires: ['editor','editor/plugin/list-utils/btn','editor/plugin/ordered-list/cmd']},
'editor/plugin/color/btn': {requires: ['editor','editor/plugin/button/','editor/plugin/overlay/','editor/plugin/dialog-loader/']},
'editor/plugin/bold/cmd': {requires: ['editor','editor/plugin/font/cmd']},
'editor/plugin/local-storage/index': {requires: ['editor','overlay','editor/plugin/flash-bridge/']},
'editor/plugin/bubble/index': {requires: ['overlay','editor']},
'editor/plugin/underline/cmd': {requires: ['editor','editor/plugin/font/cmd']},
'editor/plugin/bold/index': {requires: ['editor','editor/plugin/font/ui','editor/plugin/bold/cmd']},
'editor/plugin/back-color/index': {requires: ['editor','editor/plugin/color/btn','editor/plugin/back-color/cmd']},
'editor/plugin/draft/index': {requires: ['editor','editor/plugin/local-storage/','overlay','editor/plugin/menubutton/']},
'editor/plugin/link/index': {requires: ['editor','editor/plugin/bubble/','editor/plugin/link/utils','editor/plugin/dialog-loader/','editor/plugin/button/']},
'editor/plugin/remove-format/index': {requires: ['editor','editor/plugin/remove-format/cmd','editor/plugin/button/']},
'editor/plugin/font/ui': {requires: ['editor','editor/plugin/button/','editor/plugin/menubutton/']},
'editor/plugin/element-path/index': {requires: ['editor']},
'editor/plugin/source-area/index': {requires: ['editor','editor/plugin/button/']},
'editor/plugin/justify-right/index': {requires: ['editor','editor/plugin/justify-right/cmd']},
'editor/plugin/list-utils/btn': {requires: ['editor','editor/plugin/button/','editor/plugin/menubutton/']},
'editor/plugin/justify-left/index': {requires: ['editor','editor/plugin/justify-left/cmd']},
'editor/plugin/outdent/index': {requires: ['editor','editor/plugin/outdent/cmd']},
'editor/plugin/fake-objects/index': {requires: ['editor']},
'editor/plugin/font-family/cmd': {requires: ['editor','editor/plugin/font/cmd']},
'editor/plugin/back-color/cmd': {requires: ['editor/plugin/color/cmd']},
'editor/plugin/link/dialog': {requires: ['editor','editor/plugin/overlay/','editor/plugin/link/utils']},
'editor/plugin/multiple-upload/dialog': {requires: ['editor','component/plugin/drag','editor/plugin/progressbar/','editor/plugin/overlay/','editor/plugin/flash-bridge/','editor/plugin/local-storage/','swf']},
'editor/plugin/code/dialog': {requires: ['editor','editor/plugin/overlay/','menubutton']},
'editor/plugin/justify-center/cmd': {requires: ['editor/plugin/justify-utils/cmd']},
'editor/plugin/flash-common/baseClass': {requires: ['editor','editor/plugin/contextmenu/','editor/plugin/bubble/','editor/plugin/dialog-loader/','editor/plugin/flash-common/utils']},
'editor/plugin/justify-center/index': {requires: ['editor','editor/plugin/justify-center/cmd']},
'editor/plugin/unordered-list/cmd': {requires: ['editor','editor/plugin/list-utils/cmd']}
});
