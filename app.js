/**
 * GAME FUNCTION:
 * Player must guess a number between a min and max
 * Player gets a certain amount of guesses
 * Notify a player of guesses remaining
 * Notify the player of the correct answer if loose
 * Let the player choose to play again
 */

//Game variables 
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//Game UI elements
const gameWrapper = document.getElementById('game-wrapper'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.getElementById('guess-input'),
      guessBtn = document.getElementById('guess-btn'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


const playAgain = document.querySelector('.play-again');

gameWrapper.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

//Add Event Listeners
guessBtn.addEventListener('click', function(e) {
    //Create a guess variable
    const guess = parseInt(guessInput.value);
    //Check for input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please guess a number between ${min} and ${max}`, 'red')
    } else {
        if (guess === winningNum) {
            gameOver(true, `${winningNum} is correct, You Won!`)
            // //Disable input
            // guessInput.disabled = true;
            // //Change the border color to green
            // guessInput.style.borderColor = 'green';
            // //Set a winning message
            // setMessage(`${winningNum} is correct, You Won!`, 'green');
        } else {
            guessesLeft -= 1;

            if (guessesLeft === 0) {
                gameOver(false, `You lost the game, the correct guess is ${winningNum}` );
            } else {
                guessInput.style.borderColor = 'red';
                setMessage(`Incorrect, You have ${guessesLeft} remaining!`, 'red');
                guessInput.value = "";
            }
        }
        
    }

    e.preventDefault();
})

//Game values
function generateRandom(min, max) {
    let difference = max - min;
    let rand = Math.random();

    rand = Math.floor(rand * difference);


    rand += min;

    return rand;
}

//Set message function
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

function gameOver(won, msg) {
    //Set color
    let color;
    won == true ? color = 'green' : color = 'red';
    //Disable input
    guessInput.disabled = won;
    //Change the border color to green
    guessInput.style.borderColor = color;
    //Change color of the message
    // msg.style.color = color;
    //Set a winning message
    setMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className += "play-again";
}
