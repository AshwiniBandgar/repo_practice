//Array - Arrays are an ordered collection that can hold data of any type .

//In Javascript arrays are created with square brackets [....] or using Array constructor

//using square brackets [....]
// let arr =[];
// console.log(arr)
// console.log(typeof arr)

//Almost all the time, square brackets [....] syntax is used 

//-------------------------------
//using Array constructor

 let arr1 = new Array()
 console.log(arr1)
 console.log(typeof arr1)


//---------------------


let arr =[1,2,3,4,5]   // number array 
 console.log(arr);
console.log(typeof arr)

let arr1 = ['a','b','c'] // string array
// console.log(arr1);
// console.log(typeof arr1)


let arr2 =[true,false]  //boolean
// console.log(arr2);
// console.log(typeof arr2)

let arr3 =[1,2,3,'a','b',true,false,'john',undefined,null] //mix array
// console.log(arr3);
// console.log(typeof arr3)


//------------------------------------
//Array always start with zero index and lenght  start from 1
// Data stored in array is also called as array elements


//we store duplicate data in array 
let arr4 = [1,1,1,1,1,1,1]
// console.log(arr4)

//---------------------------------------------

//how to retrive data /array elements from array

let arr5 = [4,3,5,6,7,9]
//   index= 0,1,2,3,4,5
// console.log(arr5[0])
// console.log(arr5[1])
// console.log(arr5[2])
// console.log(arr5[3])
// console.log(arr5[4])
// console.log(arr5[5])

//-----------------------
//length - length always start from 1
let arr6 = [1,2,3,'a','b',true,false,'john',undefined,null]
//length = [1,2,3, 4 , 5 ,6   ,   7 ,   8  ,      9  , 10 ]  
console.log(arr6)  
console.log(arr6.length)

//Adding new element in existing array at end
