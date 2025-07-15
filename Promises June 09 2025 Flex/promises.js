// Promise State
// Pending, Rejected, Accepted

const returnPromise = require('./promise/promise-generator');

const returnedPromise = returnPromise.returnPromise;
const rejectedPromise = returnPromise.returnRejectedPromise;

// const myPromise = returnedPromise([1,2,3])

// setTimeout(() => {
//   console.log(myPromise);
// }, 3000)

// myPromise.then

// "".toUpperCase()
// [].push()

// If you are searching a database that is a promise
// If yyou are going to another website to get data that is a promise
// If you are doing something that JS can't do and needs to use an "API" that is most likely a promise
// setTime
// returnedPromise([1, 2, 3])
//   .then((res) => {
//     console.log(res);
//     const arr = [];
//     for (let items of res) {
//       arr.push((items += 20));
//     }
//     return arr;
//   })
//   .then((data) => {
//     console.log(data);
//     return 'Return anything!';
//   })
//   .then((data) => {
//     console.log(data);
//   });


// rejectedPromise([1,2,3])
//   .then(data => {
//     console.log(data);
//   }).catch(err => {
//     console.log('We can write a custom Error message for this promise: ', err);
//   })

// Get data
// Then clean data
// then update data
returnedPromise([1,2,3])
  .then((data) => {
    console.log(data);
    return returnedPromise(`Another Promise`)
  })
  .then(res => {
    console.log(res);
    return rejectedPromise('THIS IS NOT GOING TO WORK!')
  })
  .then(res => {
    console.log(res);
    return returnedPromise('THIS IS GOING TO WORK!')
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log('Was there an error in my promise chain? ' + err);
  })