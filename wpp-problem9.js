//Write a JavaScript program to find the closest value to 100 from two numerical values

function checkNum(a, b) {
    if (a != b) {
        let a1 = Math.abs(a - 100);
        let b1 = Math.abs(b - 100);
        if (a1 < b1) {
            return a;
        }
        if (b1 < a1) {
            return b1;
        }
        return 0;
    }
    else {
        return false;
    }

}
console.log(checkNum(99, 98));