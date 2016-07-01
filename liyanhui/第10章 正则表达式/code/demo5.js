/*
var pattern = /^[a-z]+\s[0-9]{4}$/;
var str = 'google 2012';
alert(pattern.exec(str));					//返回一个包含字符串的数组
*/

/*
var pattern = /^[a-z]+/;					//只匹配到字母	
var str = 'google 2012';
alert(pattern.exec(str));					//只返回google的字符串数组
*/

/*
var pattern = /^([a-z]+)\s([0-9]{4})$/;		//使用了分组
var str = 'google 2012';
var a = pattern.exec(str);	
//alert(a.length); //3
alert(a[0]);						//a[0]，返回匹配到的整个字符串
alert(a[1]);						//a[1]，返回匹配到的第一个分组的字符串
alert(a[2]);						//a[2]，返回匹配到的第二个分组的字符串
*/

/*
var pattern = /(\d+)([a-z])/;		//这个叫做捕获性分组，所有的分组都捕获返回
var str = '123abc';
var a = pattern.exec(str);
//a[0]返回123a
//a[1]返回123
//a[2]返回a
*/

/*
var pattern = /(\d+)(?:[a-z])/;	//非捕获性分组，只要在不需要捕获返回的分组加上?:
var str = '123abc';
alert(pattern.exec(str));
*/

/*
var pattern = /(a?(b?(c?)))/;		//嵌套分组，从外往内获取
var str = 'abc';
alert(pattern.exec(str));
*/

/*
//第一步：a[0]，整个匹配到的字符串abc
//第二步：a[1]，匹配第一个分组(a?(b?(c?))),  abc
//第三步：a[2]，匹配第二个分组(b?(c?)， bc
//第三步：a[3]，匹配第三个分组(c?)， c
*/

/*
var pattern = /goo(?=gle)/;			//goo后面必须是gle才能返回goo，这里一定要注意，返回的是goo，而不是google
var str = 'google';
alert(pattern.exec(str));				//返回的是goo，而不是google，这是前瞻性捕获
*/

/*
var pattern = /\[/;				//用\符号来转义正则里的特殊字符，才能匹配
var str = '[';
alert(pattern.test(str));
*/

/*
var pattern = /^\d+/gm;					//限定了首匹配，并且开启换行模式
var str = '1.baidu\n2.google\n3.bing';
alert(str.replace(pattern, '#'));
*/


















