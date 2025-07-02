// const myName = "Joe";

// console.log('How are you ' + myName);

// const num = 100

// console.log(100 * num);



// console.log(sum(10, 10) * 100); 

// const myNewName = function (newName) {
//   return `My New name is ${newName}`
// }


// console.log(`My name is not Ryan. ${myNewName('Kevin')}`);




// sum(10, 10) // 20

// const newSum = sum;

// newSum(100, 100) // 200

// const sum2 = function(num1) {
//   return sum(10, 10) + num1
// }
// const sum3 = function (num1) {
//   return minus(10, 10) + num1
// }


// const sum = function (num1, num2) {
//   return num1 + num2
// }

// const minus = function (num1, num2) {
//   return num1 - num2
// }

// const div = function (num1, num2) {
//   return num1 / num2
// }

// const sum4 = function(num1, callback) {
//   return callback(10, 10) + num1
// }

// // (10 + 10) + 30 = 50
// console.log( sum4(10, minus));
// console.log( sum4(10, sum));
// console.log( sum4(10, div));


const sum = function (num, callback) {
  return callback(num) + num
}

const num = sum(10, function(num) {
  return 100 + 100
})

console.log(num);

// (100 - 50) + 100
const num2 = sum(100, function() {
  return 100 - 50
})