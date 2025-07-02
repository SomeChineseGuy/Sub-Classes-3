// Array questions
// arr helper methods


// numArr.push(6);

// console.log(numArr);

// console.log('Hello World'.toLowerCase());
// console.log('Hello World'.toUpperCase());

// Arr .map helper method
// c style for(let i = 0; i < arr.length; i++)
// for of for(let item of arr)
// for in for(let item in arr/obj)




// map - it CREATES A NEW arr and changes each item in that array in whatever call back way you want
// const newNumArr = numArr.map((item) => {
//   return item + 100;
// });



// We know this IS an array
// we need a function that RETURNS an array
// console.log(newNumArr);

const numArr = [1,2,3,5];
console.log(numArr);
const newMap = (arr, callback) => {
  const newArr = [];
  for(let item of arr) {
    newArr.push(callback(item));
  }
  return newArr;
}

const newArr = newMap(numArr, (item) => {
  return item + 100
})

console.log(newArr);

