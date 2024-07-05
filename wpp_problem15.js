//Write the javascript program to compute the sum of three elements of a given
//array of integers of length 3;

function sumOfArray(arr) {
    if (arr.length !== 3) {
        throw new Error ("Array length must be 3");
    }else return arr[0] + arr[1] + arr[2];
}
console.log(sumOfArray([23, 53, 45]));