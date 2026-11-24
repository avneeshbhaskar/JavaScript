console.log("name"=="name");
console.log("name"==="name");
console.log([1]==[1]);
// array stores the address of the value 

let arr = ['a','b','c'];
let arrCopy = arr;  // it stores the value of arr
arrCopy.push("hello"); // you can see this operation in both array
console.log(arr);
console.log(arrCopy);
// arr and arrCopy both stores the same array value
// if we change one then another changes automatically


