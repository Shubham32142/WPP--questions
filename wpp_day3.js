
// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
//The program displays a message "Good Work" if the input matches the guessd number otherwise "Not matched".

function randNumber(min, max, number) {
    const getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    if (number === getRandom) {
        return "Good Work! " + getRandom;
    } else {
        return "try again next time bud " + getRandom;
    }

}
console.log(randNumber(1, 10, 5));

