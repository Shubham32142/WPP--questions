/*Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers*/

function findMaxDiff(arr) {
    if (arr.length > 2) {
        return -1;
        //If no adjacent elements exist
    }
    let result = 0;
    for (i = 0; i < arr.length-1; i++){
        let diff = Math.abs(arr[i] - arr[i + 1]);
        if (diff > result) {
            result = diff;
        }   
    }
    return result;
}
console.log(findMaxDiff([23,124,5643,12]));