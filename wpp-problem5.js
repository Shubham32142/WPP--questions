// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

let str = "shubham";
function removeChar(str, char) {
    let split = str.split('');
    split.splice(char, 1);
    return split.join('');

}
console.log(removeChar(str, 5))