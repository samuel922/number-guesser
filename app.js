/**
 * GAME FUNCTION:
 * Player must guess a number between a min and max
 * Player gets a certain amount of guesses
 * Notify a player of guesses remaining
 * Notify the player of the correct answer if loose
 * Let the player choose to play again
 */

//Game values
function generateRandom(min=1, max=100) {
    let difference = max - min;
    let rand = Math.random();

    rand = Math.floor(rand * difference);


    rand += min;

    return rand;
}

let num = generateRandom();
console.log(num)