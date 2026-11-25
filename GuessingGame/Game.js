const max = prompt("Enter the Maximum number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("User quit!");
        break;
    }
    if(guess == random){
        console.log("You guess it right...Congratulations😃!");
        break;
    }
    else if(guess < random){
        guess = prompt("Your guess was too small. please try again");
    }
    else{
       guess = prompt("Your guess is too large...please try again😅!");
    }
}