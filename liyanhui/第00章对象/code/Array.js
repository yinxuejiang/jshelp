/*
//array1.concat([item1[, item2[, . . . [, itemN]]]])
//返回一个新数组，这个新数组是由两个或更多数组组合而成的。
function ConcatArrayDemo(){
	var a, b, c, d;   a = new Array(1,2,3);
    b = "JScript";
    c = new Array(42, "VBScript");
    d = a.concat(b, c);
   return(d);
}
*/

/*
//arrayObj.join(separator)
//返回字符串值，其中包含了连接到一起的数组的所有元素，元素由指定的分隔符分隔开来。
function JoinDemo(){
	var a, b;
	a = new Array(0,1,2,3,4);
	b = a.join("-");
	return(b);
}
*/

/*
//arrayObj.shift( )
//移除数组中的第一个元素并返回该元素。
*/

/*
//arrayObj.unshift([item1[, item2 [, . . . [, itemN]]]])
//将指定的元素插入数组开始位置并返回该数组。
*/

/*
//arrayObj.pop( )
//移除数组中的最后一个元素并返回该元素。
*/

/*
//arrayObj.push([item1 [item2 [. . . [itemN ]]]])
//将新元素添加到一个数组中，并返回数组的新长度值。
*/

/*
//arrayObj.reverse( )
//返回一个元素顺序被反转的 Array 对象。 
function ReverseDemo(){
	var a, l;                  // 声明变量。
	a = new Array(0,1,2,3,4);  // 创建数组并赋值。
	l = a.reverse();           // 反转数组的内容。
	return(l);                 // 返回结果数组。
}
*/

/*
//arrayobj.sort(sortfunction) 
//返回一个元素已经进行了排序的 Array 对象。 
function SortDemo(){
	var a, l;                       // 声明变量。
	a = new Array("X" ,"y" ,"d", "Z", "v","m","r");
	l = a.sort();                   // 排序数组。
	return(l);                      // 返回排序的数组。
}
*/

/*
//arrayObj.slice(start, [end]) 
//返回一个数组的一段。
*/

/*
//arrayObj.splice(start, deleteCount, [item1[, item2[, . . . [,itemN]]]])
//从一个数组中移除一个或多个元素，如果必要，在所移除元素的位置上插入新元素，返回所移除的元素。
*/

/*
//toString
//toLocaleString
//valueOf
*/

var arr = ['a', 'b', 'c', 'd'];
var a = arr.toString();
var b = arr.valueOf();

console.log(a);
console.log(b);
















