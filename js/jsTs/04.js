console.time("a")

function ProcessDate(num) {   
	var currentTime = new Date(); //得到当前的时间
	var currentYear = currentTime.getFullYear(); //得到当前的年份
	var currentMoon = currentTime.getMonth(); //得到当前的月份
	var currentDay = currentTime.getDate(); //得到当前的天数
	    //2.0获取当前时间的一个月内的年月日：（一个月内的大众业务需求为：当前时间的月份-1，当前时间的天数+1）
	var agoDay = currentDay ;   
	var agoMoon = currentMoon;   
	var agoYear = currentYear;   
	var max;
	agoMoon = currentMoon - num;
	max = new Date(agoYear, agoMoon+1, 0).getDate(); //获取上个月的总天数 
	if(agoDay > max) {    
		agoDay = max;   
	}    //如果月份当月为1月的时候， 那么一个月内： 年：-1 月：12 日：依然不变  
	if(agoMoon < 0) {    
		agoMoon = 12 + agoMoon;    
		agoYear = currentYear - 1;   
	}
	console.log(currentMoon)
	function Appendzero(obj) {   
		if(obj < 10) {    
			return "0" + obj;   
		} else {    
			return obj;   
		}  
	}
	currentMoon = Appendzero(currentMoon);
	currentDay = Appendzero(currentDay);
	agoMoon = Appendzero(agoMoon + 1)+"";
	agoDay = Appendzero(agoDay);
	// var pretimes = new Date(agoYear,agoMoon,agoDay);
	var pretimes = agoYear + "-" + agoMoon + "-" + agoDay
	console.log(pretimes)
	return pretimes  
}
ProcessDate(1);

process.exit(console.timeEnd("a"))