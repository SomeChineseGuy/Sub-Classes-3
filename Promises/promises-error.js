const functions = require('./promise/promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const promise1 = returnPromise('this is the first')
const promise2 = returnPromise('this is the second')
const promise3 = returnPromise('this is the third')

const rejected = returnRejectedPromise('PRomise rejected!');

const getUserData = () => {
  promise1.then((data) => {
    console.log(data);
    return rejected
  }).then((data) => {
    console.log(data);
    return promise3
  }).then((data) => {
    console.log(data);
  }).catch((err) => {
    
    console.error(`error in promise chain getUserData ${err}`);
  })
}



// rejected.then((data, err) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// })