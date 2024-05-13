function randNumber(min, max, number) {
    const getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    if (number === getRandom) {
        return "Good Work! " + getRandom;
    } else {
        return "try again next time bud " + getRandom;
    }

}
console.log(randNumber(1, 10, 5));

