function addString(str) {
    if (str.length >= 3) {
        let str1 = str.substr(-3);
        return str1 + str + str1;
    }
    else {
        return str;
    }

}
console.log(addString("shubham"));