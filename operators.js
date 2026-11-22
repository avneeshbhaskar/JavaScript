// Arithmetic Operator
let a = 10;
let b = 5;

console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a+b);
console.log(a**b);

// Unary Operators
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

// Assignment Operartor
b = a;
console.log(b);

// Comparison Operator
let age = 18;
console.log(age >= 18);
console.log(5 > 6);
console.log(a != b);
console.log(age <= 18);
console.log(4 == "4");
console.log(4 === "4");

// Comparison For Unicodes
console.log('a' > 'A')

// Logical operators  // AND(&&) , OR(||) , NOT(!)
let marks = 90;

if (marks >= 33 && marks >= 80) {
    console.log("PASS");
    console.log("A+");
}

console.log(2 != 2);
console.log(!(5 > 3));

// logic practice question
let markss = 75;
if (markss>33 && markss <= 80 || !flase) {     //!false = true
    console.log("PASS");
}

/*Practice question
A "good string" is a string that starts 
with the letter 'a' & has a length > 3. write 
a program to find string is good or not. */

let str = "apple";
if (str[0] === "a" && str.length >= 3) {
    console.log("String is good!");
} else {
    console.log("String is not good!");
}

// practice question to predict the output
let num = 12;
if ((num % 3 === 0) && (num +1 == 15) || (num - 1 == 11) )  {
    console.log("Safe!...😊")
} else {
    console.log("Unsafe!...😢")
}