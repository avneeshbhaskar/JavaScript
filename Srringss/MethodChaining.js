/*I want to use multiple method 
at the same time Trim and upper case*/

let msg = "   ILoveCoding!   ";
// let newMsg = msg.trim();         // Without method chaining
// newMsg = newMsg.toUpperCase();
// console.log(newMsg);
let newMsg = msg.trim().toUpperCase();   // With Method Chaining
console.log(newMsg);    

