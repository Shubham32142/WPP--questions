/* Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.*/
const arr = ["a", "b", "c", "d", "e", "f"];
function filterArr(arr, toFilter) {
  const filteredArr = arr.filter((elem) => !toFilter.includes(elem));
  arr.length = 0;
  arr.push(...filteredArr);
  return arr;
}
console.log(filterArr(arr, "a"));
