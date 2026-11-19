//Conditional statments
let age = 23;
if (age >= 18) {
    console.log("You can vote");
    console.log("You can drive");
    console.log(5*10);
}
if (age < 18) {
    console.log("You cannot vote");
}

let firstName = "Avneesh";
if (firstName == "Avneesh") {
    console.log(`Welcome ${firstName}`)
}

// Practice question
let color = "red";
if (color == "yellow") {
    console.log("Slow down! light color is Yellow");
}
else if (color == "red") {
    console.log("Stop! light color is Red");
}
else if (color == "green") {
    console.log("Go! light color is Green");
}

//else if statement
let Age = 17;
if (Age >= 18) {
    console.log("You can vote");
}
else if (Age < 18) {
    console.log("You cannot vote")
}
if (Age < 19) {
    console.log("Teen");
}
if (Age < 12) {
    console.log("child");
}
else{
    console.log("Invalid number");
}

// Practice question
let marks = 65;
if (marks >= 70) {
    console.log("A");
}
else if (marks >= 60) {
    console.log("B");
}
else if (marks >= 50) {
    console.log("C");
}
else if (marks < 33) {
    console.log("Fail");
}else{
    console.log("Invalid Marks please verify and enter it correctly");
}

// Practice question 
let month = "April";
if (month === "january") {
    console.log("Winter are here!");
}
else if (month === "april") {
    console.log("Summers are here!");
}else{
    console.log("invalid string");
}


//Popcorn size based price practice question
let size = 'M';
if (size === 'XL') {
    console.log("Your price is = Rs.250");
}
else if (size === 'L') {
    console.log("Your price is = Rs.200");
}
else if (size === 'M') {
    console.log("Your price is = Rs.100");
}
else if (size === 'S') {
    console.log("Your price is = Rs.50");
}
else{
    console.log("Please enter valid choice !");
}

// Nested if else statements
let Marks = 15;
if (Marks >= 33) {
    if (Marks >= 80) {
        console.log("Grade : O");
    }else{
        console.log("Grade : A");
    }
}else{
    console.log("better luck next time!");
}