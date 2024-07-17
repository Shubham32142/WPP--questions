function freqNum(arr) {
    if (arr.length === 0) return null;
    let obj = {};
    //to count the how many times a number is repeated
    for (i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) obj[arr[i]]++;
        else obj[arr[i]] = 1;
    }
    
    let arr2 = Object.keys(obj).reduce((acc, curr) => {
        return obj[acc] > obj[curr] ? acc : curr;
    })
    //if all has same counts
    let allSame = Object.values(obj).every(val => val === obj[arr2]);
    if (allSame) return null;    
    return arr2;

}
console.log(freqNum([1, 2, 3, 4, 2, 1, 2, 3, 4, 1, 1]));
console.log(freqNum([1, 2, 3, 4, 5]));
console.log(freqNum([1, 2, 3, 4, 2, 1, 2, 1]));
console.log(freqNum([1, 2, 3, 4, 2,]));
console.log(freqNum([]));
