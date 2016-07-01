/*
var box = new RegExp('Box');					//第一个参数是模式字符串
alert(box);										// /Box/两个反斜杠是正则表达式的字面量表示法
*/

/*
var box = new RegExp('Box', 'gi');				//第二参数可选，模式修饰符				
alert(box);		
*/

/*
var box = /Box/;								//使用字面量方式的正则
alert(box);		
*/

/*
var box = /Box/ig;								//字面量正则，带修饰符的							
alert(box);
*/

/*
var pattern = new RegExp('Box');				//模式
var str = 'box';								//字符串
alert(pattern.test(str));						//返回的是false，大小写不一致
*/

/*
var pattern = new RegExp('Box', 'i');			//区分大小写
var str = 'box';											
alert(pattern.test(str));						//true
*/

/*
alert(/Box/i.test('box'));						//true，一句话匹配
*/

/*
var pattern = /Box/i;							//使用字面量的方式
var str = 'box';
alert(pattern.test(str));						//true
*/

/*
var str1 = 'box';
var str2 = 'box';
alert(str1 == str2);							//字符串的匹配比较方式
*/

/*
var pattern = /Box/i;							//不区分大小写匹配
var str = 'This is a xox!';						//一句英文
alert(pattern.test(str));						//字符串中是否包含模式中的正则

												//This is a box! 中是否包含不区分大小写的Box
*/

/*
var pattern = /Box/i;
var str = 'box';
alert(typeof pattern.exec(str));				//返回的是数组，有就返回数组的值，没有就返回null
*/

/*
var pattern = /Box/i;
var str = 'ssss';	
alert(pattern.exec(str));						//如果没有匹配到，就返回null
*/






















