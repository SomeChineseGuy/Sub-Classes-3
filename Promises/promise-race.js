const functions = require('./promise/promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;
const delay = () => {
  return Math.floor(Math.random() * 4000)
}


const promise1 = returnPromise('one', delay())
const promise2 = returnPromise('two', delay())
const promise3 = returnPromise('three', delay())
const rejected = returnRejectedPromise('REJECTED!', 1)

const promiseArr = [promise1, promise2, promise3, rejected];

Promise.race(promiseArr).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
})