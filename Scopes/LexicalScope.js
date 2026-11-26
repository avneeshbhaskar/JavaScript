//Lexical Scope
//Variable is accessible from parent to child but not child to parent
//example
function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(y); //it will give the output as 6
    }
    innerFunc(); //we can use this function here not outside 
    //"hum isko bahar call nhi kar skte hai"
}
outerFunc();
innerFunc(); //not allowed and gives the error

//not possible
function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        let a = 10;  //it will be not accessible to the outer function
        console.log(y); //it will give the output as 6
    }
    console.log(a); //it will gives the error
    innerFunc();
}
outerFunc();
