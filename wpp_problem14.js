//Write a JavaScript program to extract the first half of an even string.
function extractStr(str) {
    let mid = Math.floor(str.length / 2);
    let firstHalf = str.slice(0, mid);
    return firstHalf;
}
console.log(extractStr("hello"));