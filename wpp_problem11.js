/*Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
*/
function checkNumber(a, b, c) {
    if (a < b && b < c) {
        return "strict mode"
    } else if ((a <= b && b < c) || (a < b && b <= c)) {
        return "soft mode"
    } else {
        return "neither"
    }


}
console.log(checkNumber(10, 15, 31));