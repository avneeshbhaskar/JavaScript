let greet = "hello"; //global scope

function changeGreet() {
  let greet = "namaste";
  console.log(greet); //function scope
  
  function innertGreet() {
    console.log(greet); //lexical scope
  }
  innertGreet();
}
console.log(greet);
changeGreet();
