// This is for seeing which promise is the fastest

const returnedPromise = require('./promise/promise-generator');
const returnPromise = returnedPromise.returnPromise;
const rejected = returnedPromise.returnRejectedPromise;

const promise1 = returnPromise('one', 2000)
const promise2 = returnPromise('two', 2000)
const promise3 = returnPromise('three', 500)
const promise4 = rejected('This is rejected',200)

const promiseArr = [promise1, promise2, promise3, promise4]

Promise.race(promiseArr)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })