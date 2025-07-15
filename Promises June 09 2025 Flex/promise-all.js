// This is when you are making multiple request

const returnedPromise = require('./promise/promise-generator');
const returnPromise = returnedPromise.returnPromise;
const rejected = returnedPromise.returnRejectedPromise;

const promise1 = returnPromise('one', 2000)
const promise2 = returnPromise('two', 1500)
const promise3 = returnPromise('three', 3000)
const promise4 = rejected('This is rejected')

const promiseArr = [promise1, promise2, promise3, promise4];

Promise.all(promiseArr)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })