let favMovie = "ramaiya";
let guess = prompt("Enter your guess");

while (guess != favMovie) {
  if (guess == "quit") { 
    console.log("You quit! 😢");
    break;
  }
  guess = prompt("Wrong guess..hahaha 😂 try again!");
}

if (guess == favMovie) {
  console.log("You guees it right....thank you!!");
}
