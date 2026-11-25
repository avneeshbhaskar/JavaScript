function sum(a,b){
    console.log("hello"); // it will prints
    return a+b;  // return only returns the value not prints
    console.log("hello"); // not prints because after return value program will stop running
}
sum(5,10); // prints nothing because console.log is missing

// let's modify the above code
function sum(a,b){
    return a+b;  // return keyword only returns the value not prints
}
let Sum = sum(5,10);
console.log(Sum);  // it will prints 15
console.log(sum(10,10));  
console.log(sum(sum(1,2),3)); //6 //we can call it like this