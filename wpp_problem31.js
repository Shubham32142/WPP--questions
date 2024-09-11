//Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.
const controller = new AbortController();
async function fetchApi(timeout = 500) {
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch("https://dummyjson.com/products", {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Fetch request timed out");
    } else {
      console.error("Fetch error:", error);
    }
    throw error;
  }
}
fetchApi()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
