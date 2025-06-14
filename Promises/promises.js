const functions = require('./promise/promise-generator');

const returnPromise = functions.returnPromise;

// const myPromise = returnPromise('Does this work?');
// console.log(myPromise);
// setTimeout(() => {
//   console.log(myPromise);
// }, 3000)

// myPromise.then((data) => {
//   console.log(data);
// })

// What does a promise return?
// ANYTHING YOU WANT!

const myPromise = returnPromise([1,2,3]);

// myPromise.then((data) => {
//   console.log(data);
// })

// When do we use a promise?
// We can go out and grab data and return that data
// we can chain promises as long as the promise we want to chain ends with a return
myPromise.then((data) => {
  console.log(data);
  return 'Something cool'
}).then((data) => {
  console.log(data);
})

