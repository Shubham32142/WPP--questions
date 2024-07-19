/*
Write a JavaScript program to reverse the order of bits in an integer. 
14 -> 00001110 -> 01110000 -> 112
56 -> 00111000 -> 00011100 -> 28
234 -> 11101010 -> 01010111 -> 87 */
function binaryNum(a) {
    let bits = a.toString(2).padStart(8, '0');
    let reversedBits = bits.split('').reverse().join('');
    return parseInt(reversedBits, 2);
}
console.log(binaryNum(14));