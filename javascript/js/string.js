
console.log("String")

//typeof

let language ='Javascript';

console.log(typeof language);

//valueof()
console.log(language.valueOf())

//charAt - index always start from zero
 let sname ='Kadam'
 let char = sname.charAt(3)
 console.log(char)
 //this method will retrun charater at given index.
 //if index is not found then retrun empty


 //lenght - lenght count start from 1 

 console.log(language.length)


 //string concatnation
 console.log(language+"LANG")

 let newString = language.concat("React","Redux")
 console.log(newString)

 //indexOf - this will retrun the index of given string 
 //or character if not found then retrun the -1
 let name ="my name is Ramesh";
 let index= name.indexOf('z');
 let message = index === -1 ? "Given charater is not available " : index
 console.log(message)


 //lastIndexOf - will retrun last occurance index of given char or string

 let clgName = "C oe pune"
 let lastIndex =clgName.lastIndexOf('e')
 console.log(lastIndex)


//replace
var newClg = clgName.replace('C','College')
console.log(newClg)


//search
let test = "this is test string";

let t1 = test.search('test')
console.log(t1)

//slice 
//slice(start index, end index)
//this will return new string with given start index and end index minus 1

let test1 ="CTS LLP,Pune";
let slicedString = test1.slice(4,8);
console.log(test1)
console.log(slicedString)


//split - will convert string into array based on given logic 

let test2 = "test2,3 4, 5";
//let splittedArr = test2.split('')
//let splittedArr = test2.split(' ')
let splittedArr = test2.split(',')

console.log(splittedArr)


//touppercase
let test3 ="test3"
let uppCaseStr = test3.toUpperCase();
console.log(uppCaseStr)


//tolowecase

let test4 ='TEST 5';
let lowerCaseStr = test4.toLowerCase();
console.log(lowerCaseStr)


//substr - will return new string with given start index and lenght
//subStr(start index, lenght)
// let test5 = 'myname is John';

// let subStrr = test5.substr(1,3)
// console.log(subStrr)


//include - will return true or false 

let test5 = 'my name is John';
let inclueStr = test5.includes('test1')
console.log(inclueStr)

















