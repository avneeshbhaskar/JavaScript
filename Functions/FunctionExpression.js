//function expression call by variable
let sum = function(a, b){ //nameless function
    return a+b;
}

console.log(sum(2,5));

sum = function(a,b){
    console.log(a*b);
}
sum(2,2);
