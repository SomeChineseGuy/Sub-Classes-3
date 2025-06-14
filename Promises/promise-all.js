const functions = require('./promise/promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;
const promise1 = returnPromise('one', 2000)
const promise2 = returnPromise('two', 3000)
const promise3 = returnPromise('three', 1000)
const rejected = returnRejectedPromise('REJECTED!', 4000)


const promiseArr = [promise1, promise2, promise3, rejected];

Promise.all(promiseArr).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
})