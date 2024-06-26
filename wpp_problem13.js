//Write a JavaScript program to count the number of vowels in a given string.
function countVowels(str) {
    let count = 0;
    let setVowel = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    for (let char of str) {
        if (setVowel.has(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello world"));
console.log(countVowels("Javascript"));
console.log(countVowels("pc"));