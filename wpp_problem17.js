/*Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
Note: 'a' will be replaced by 'b' or 'z' would be replaced by 'a'.*/

function replaceStr(str) {
    let result = '';

    for (i = 0; i < str.length; i++){
        let ch = str.charCodeAt(i);
        if (ch === 122) {
            result += 'a';
        } else if (ch === 90) {
            result += 'A';
        }
        else {
            result += String.fromCharCode(ch + 1);
        }
    }
    return result;
}
console.log(replaceStr('hellz'));