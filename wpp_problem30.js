// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'
const apiUrl = [
  "https://dummyjson.com/products",
  "https://dummyjson.com/products",
  "https://dummyjson.com/products",
];
async function allPromise(apiUrl) {
  try {
    const response = apiUrl.map((res) =>
      fetch(res).then((response) => response.json())
    );
    const result = await Promise.all(response);
    return result;
  } catch (error) {
    console.error("can't fetch the APIs:", error);
  }
}
allPromise(apiUrl)
  .then((data) => console.log("data:", data))
  .catch((err) => console.log("error:", err));
