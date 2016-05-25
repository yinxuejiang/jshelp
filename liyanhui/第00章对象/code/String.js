/*
// anchor 方法 | big 方法 | blink 方法 | bold 方法 | fixed 方法 | fontcolor 方法 | fontsize 方法 | italics 方法 | link 方法 | small 方法 | strike 方法 | sub 方法 | sup 方法

*/

/*
// toLowerCase 方法 | toUpperCase 方法 | toString 方法 | valueOf 方法

*/

/*
// charAt 方法 | charCodeAt 方法 | concat 方法 |  fromCharCode 方法 | indexOf 方法 |  lastIndexOf 方法 | match 方法 | replace 方法 | search 方法 | slice 方法 | split 方法 |  substr 方法 | substring 方法 

*/

/*
// strObj.charAt(index)
//返回指定索引位置处的字符。
var str = 'abcdefghijklmnopqrstuvwxyz';
console.log( str.charAt(11) );
*/

/*
//strObj.charCodeAt(index)
//返回一个整数，代表指定位置上字符的 Unicode 编码。
*/

/*
//string1.concat([string2[, string3[, . . . [, stringN]]]])
//返回字符串值，该值包含了两个或更多个提供的字符串的连接。
*/

/*
//String.fromCharCode([code1[, code2[, ...[, codeN]]]])
//从一些 Unicode 字符值中返回一个字符串。
*/

/*
//strObj.indexOf(subString[, startIndex])
//返回 String 对象内第一次出现子字符串的字符位置。
var str = 'abcdefghijklmnopqrstuvwxyz';
console.log( str.indexOf("f") );
*/

/*
//strObj.lastIndexOf(substring[, startindex])
//返回 String 对象中子字符串最后出现的位置。 
*/

/*
//stringObj.match(rgExp) 
//使用正则表达式模式对字符串执行查找，并将包含查找的结果作为数组返回。
function MatchDemo(){
	var r, re;         // 声明变量。
	var s = "The rain in Spain falls mainly in the plain";
	re = /[a-z]+/ig;      // 创建正则表达式模式。   
	r = s.match(re);   // 尝试去匹配搜索字符串。
	return(r);         // 返回的数组包含了所有 "ain"                       // 出现的四个匹配。
}
console.log( MatchDemo() );
*/

/*
//stringObj.replace(rgExp, replaceText)
//返回根据正则表达式进行文字替换后的字符串的复制。
function ReplaceDemo(){
	var r, re;                      // 声明变量。
	var ss = "The rain in Spain falls mainly in the plain.";
	re = /(\S+)(\s+)(\S+)/g;        // 创建正则表达式模式。
	r = ss.replace(re, "$3$2$1");   // 交换每一对单词。
	return(r);                      // 返回结果字符串。
}
console.log( ReplaceDemo() );
*/

/*
//stringObj.search(rgExp)
//返回与正则表达式查找内容匹配的第一个子字符串的位置。
function SearchDemo(){
	var r, re;                   // 声明变量。
	var s = "The rain in Spain falls mainly in the plain.";
	re = /falls/i;				// 创建正则表达式模式。
	r = s.search(re);			// 查找字符串。
	return(r);					// 返回与正则表达式查找内容匹配的第一个子字符串的位置  返回 Boolean 结果。
}
console.log( SearchDemo() );
*/

/*
//stringObj.slice(start, [end])
//返回字符串的片段。
*/

/*
//stringObj.split([separator[, limit]])
//将一个字符串分割为子字符串，然后将结果作为字符串数组返回。
function SplitDemo(){
	var s, ss;
	var s = "The rain in Spain falls mainly in the plain.";   // 在每个空格字符处进行分解。
	ss = s.split(" ");
	return(ss);
}
console.log( SplitDemo() );
*/

/*
//stringvar.substr(start [, length ])
//返回一个从指定位置开始的指定长度的子字符串。
function SubstrDemo(){
	var s, ss;					 // 声明变量。
	var s = "The rain in Spain falls mainly in the plain.";
	ss = s.substr(12, 5);		// 获取子字符串。
	return(ss);					// 返回 "Spain"。
}
console.log( SubstrDemo() );
*/

/*
//strVariable.substring(start, end)
//"String Literal".substring(start, end)
//返回位于 String 对象中指定位置的子字符串。 
function SubstringDemo(){
	var ss;							 // 声明变量。
	var s = "The rain in Spain falls mainly in the plain..";
	ss = s.substring(12, 17);		// 取子字符串。
	return(ss);                     // 返回子字符串。
}
console.log( SubstringDemo() );
*/



