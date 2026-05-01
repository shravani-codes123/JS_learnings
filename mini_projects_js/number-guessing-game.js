
const min = 1;
const max = 50;

const target = Math.floor(Math.random() * (max - min + 1)) + min;
let Attempts = 5;
let gameOver = false;
guessNumber(25); 
guessNumber(10);
guessNumber(40);
guessNumber(30);
guessNumber(20);


function guessNumber(userGuess) {
    if(Attempts <= 0 || gameOver){
        console.log("Game Over! No more attempts left.");
        return;
    }
    
    if(isNaN(userGuess) || userGuess < min || userGuess > max){
        console.log(`Please enter a valid number between ${min} and ${max}.`);
        return;
    }

    Attempts--; 
    // make sure to decrease attempts after a valid guess and before checking the guess because if the user has no attempts left, we want to end the game immediately.

    if (userGuess < target) {
        console.log("Too low! Try again.");
    } else if (userGuess > target) {
        console.log("Too high! Try again.");
    } else {
        console.log("Congratulations! You've guessed the number!");
        gameOver = true;
        return;
    }

    if(Attempts == 0){
        gameOver = true;
        console.log(`Game Over! The correct number was ${target}.`);
        return;
    }
}

