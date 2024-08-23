// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

function ifNotNumber(number) {
  if (typeof number !== "number" || !Number.isInteger(number)) {
    throw new Error("The value is not a Integer");
  } else {
    console.log(`this is the number ${number}`);
  }
}

try {
  ifNotNumber("5");
} catch (e) {
  console.error(e.message);
}
