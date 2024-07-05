//Write a javascript program to swap the first and last elements of a given array of intgers.
//The array length should be atleast 1;
 
function swapElem(arr) {
    if (arr.length < 1) {
        throw new Error("array length must be atleast 1");
    } else {
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
        return arr
    }    
}
console.log(swapElem([1, 2, 3, 5]));