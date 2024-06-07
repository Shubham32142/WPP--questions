/*
Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string.
If the string length is less than 3 convert all the characters to upper case.*/

function proStr(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    let firstStr = str.substr(0, 3).toLowerCase();
    let lastStr = str.substr(3);
    return firstStr + lastStr;

}
console.log(proStr("SHUBHAM"));