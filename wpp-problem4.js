//Write a JavaScript program to calculate the days left before Christmas.

function daysTillChristmas() {
    const date = new Date();
    const christmasDate = new Date(date.getFullYear(), 11, 25);
    if (christmasDate < date) {
        christmasDate = new Date(date.getFullYear() + 1, 11, 25);
    }
    let differenceInTime = christmasDate.getTime() - date.getTime();
    let daysUntil = Math.ceil(differenceInTime / (1000 * 3600 * 24))
    return daysUntil;
}

console.log(daysTillChristmas());