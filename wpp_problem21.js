//Write a JavaScript program to remove all characters
//from a given string that appear more than once.

function removeDuplicated(str) {
    let seen = {};
    let result = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!seen[char]) {
            seen[char] = true;
            result.push(char);
        }
    }
    return result.join('');
}
console.log(removeDuplicated("sshhiiv"));