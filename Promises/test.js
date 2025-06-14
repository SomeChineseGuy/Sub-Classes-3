const {returnPromise} = require('./promise/promise-generator');

const promise = returnPromise('something', 0)

console.log(promise); 
console.log('I am first');