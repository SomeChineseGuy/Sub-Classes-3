const fs = require('fs').promises;


let data1 = 0;
let data2 = 0;
let data3 = 0;

fs.readFile('./data1.txt', 'utf8').then((data) => {
  console.log(data);
  data1  = data;
  return fs.readFile('./data2.txt', 'utf8') // pending
}).then(data => {
  console.log(data);
  data2  = data;
  return fs.readFile('./data3.txt', 'utf8')
}).then(data => {
  data3  = data;
  console.log(data3);
  console.log(`${data1} - ${data2} - ${data3} = ${data1 - data2 - data3}`);
}).catch(err => {
  throw err;
})
