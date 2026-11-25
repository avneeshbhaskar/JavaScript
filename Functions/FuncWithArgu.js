function printName(name){
    console.log("hello", name);
}
printName("Avneesh");


function Name(name){
    console.log(name);
}
Name("Avneesh bhaskar");


function Name(name,age){
    console.log(`${name} your age is ${age}`);
}
Name("Avneesh bhaskar",20);
Name("Mohit");  // age will be undefined in output its not an error
// we can give multiple parameters 
// we can skip arguments if want as above