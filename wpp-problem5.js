let str = "shubham";
function removeChar(str, char) {
    let split = str.split('');
    split.splice(char, 1);
    return split.join('');

}
console.log(removeChar(str, 5))