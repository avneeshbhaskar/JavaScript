Scope:- scope determines the accessbility of 
 variable, objects, and functions from different
 parts of the code.

1) Function Scope:- variables inside a function  are not accessible (visible) from outisde the function. They are only accessible within the function in which they are defined.

2) Block Scope:- variables defined inside a block (e.g., inside curly braces {}) are only accessible within that block. This is typically seen with let and const keywords in JavaScript.

3) Global Scope:- variables defined outside of any function or block are accessible from anywhere in the code. They have a global scope and can be accessed by any function or block within the same script.

4) Lexical Scope:- variables defined in a parent function are accessible to child functions. This means that inner functions have access to the variables of their outer functions, creating a chain of scope.but not vice versa. Child functions cannot access variables defined in their outer functions or blocks.
