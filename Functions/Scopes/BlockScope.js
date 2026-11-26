//Block scope
{
    // its a block
    let twoSum = 2+2;
}
console.log(twoSum);  //it is ouside the block it willl gives error

//example
for(let i = 0; i <= 5; i++){
    console.log(i);    
}
console.log(i);  //outside the block and it will give an error

//example
let age = 25;
if(age >= 18){
    let str = "adult";
    console.log(str); //gives output "adult" because it is inside the block
}
console.log(str); //utside the block and it will give an error
