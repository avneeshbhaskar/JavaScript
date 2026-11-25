let sum = 54; // global scope
function calSum(a,b){
    let sum = a+b; // varibale can used within the function
    return sum;
}
console.log(sum);
console.log(calSum(1,2));

//function scope can use global scope variable's value eg:-
let Sum = 54; // global scope
function calSum(a,b){
    // let sum = a+b; 
    return sum;  // now function use global scope variable 
}
console.log(sum);  //54
console.log(calSum(1,2));  //54

