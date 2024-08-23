//Write a JavaScript program to convert an asynchronous function to return a promise

const retPromise =
  (func) =>
  (...args) =>
    new Promise((res, rej) =>
      func(...args, (err, result) => (err ? rej(err) : res(result)))
    );
const delay = retPromise((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log("got it!"));
