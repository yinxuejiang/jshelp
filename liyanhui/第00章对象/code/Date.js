//Date  启用基本存储器并取得日期和时间。
// getTime 方法 
// 返回 Date 对象中的时间值 即：unix时间戳
/*
d = new Date();
console.log( d.getTime() );
*/

/*
//getDate 方法 | getDay 方法 | getFullYear 方法 | getHours 方法 | getMilliseconds 方法 | getMinutes 方法 | getMonth 方法 | getSeconds 方法 |  getYear 方法 
function DateDemo(){
	var d, s = "今天日期是: ";
	d = new Date();
	s += d.getFullYear() + "-";
	s += (d.getMonth() + 1) + "-";
	s += d.getDate() + "-";
	
	s += d.getHours() + ":";
	s += d.getMinutes() + " ";
	s += d.getSeconds() + " ";
	return(s);
}

console.log( DateDemo() );
*/

/*
//getUTCDate 方法 | getUTCDay 方法 | getUTCFullYear 方法 | getUTCHours 方法 | getUTCMilliSeconds 方法 | getUTCMinutes 方法 | getUTCMonth 方法 | getUTCSeconds 方法 | getVarDate 方法  
function DateUTCDemo(){
	var d, s = "今天日期是: ";
	d = new Date();
	s += d.getUTCFullYear() + "-";
	s += (d.getUTCMonth() + 1) + "-";
	s += d.getUTCDate() + " ";
	
	s += d.getUTCHours() + ":";
	s += d.getUTCMinutes() + " ";
	s += d.getUTCSeconds() + " ";
	return(s);
}

console.log( DateUTCDemo() );
*/

/*
//getTimezoneOffset 方法
function TZDemo(){
   var d, tz, s = " The current local time is ";
   d = new Date();
   tz = d.getTimezoneOffset();
   if (tz < 0)
      s += tz / 60 + " hours before GMT";
   else if (tz == 0)
      s += "GMT";
   else
      s += tz / 60 + " hours after GMT";
   return(s);
}
console.log( TZDemo() );
*/

/*
// setFullYear 方法 | setHours 方法 | setMilliSeconds 方法 | setMinutes 方法 | setMonth 方法 | setSeconds 方法 | setTime 方法 |  setYear 方法 
function SetDateDemo(newdate){
	var d, s;                  // 声明变量。
	d = new Date();            // 创建 date 对象。
	d.setDate(newdate);        // 设置 date 为 newdate。
	s = "Current setting is ";
	s += d.toLocaleString();
   return(s);                 // 返回新设的日期。
}
console.log( SetDateDemo(20) );
*/

/*
// setUTCDate 方法 | setUTCFullYear 方法 | setUTCHours 方法 | setUTCMilliseconds 方法 | setUTCMinutes 方法 | setUTCMonth 方法 | setUTCSeconds 方法 


*/

/*
// toGMTString 方法 | toLocaleString 方法 | toUTCString 方法 | toString 方法 | valueOf 方法 | parse 方法 | UTC 方法
d = new Date();
console.log( d.toString() );
console.log( d.valueOf() );
console.log( Date.parse(d));
*/

/*
// toGMTString 方法 | toLocaleString 方法 | toUTCString 方法 | toString 方法 | valueOf 方法 | parse 方法 | UTC 方法


*/
