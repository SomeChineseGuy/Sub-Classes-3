const arr = [1 ,2 ,3 ,4 ,5];

// [].push
// [].splice
// arr.forEach

arr.forEach((item, idx) => {
  // console.log(item += 100, idx)
});

for(let item of arr) {
  // console.log(item)
}

/// modern programing we don't want to change a value unless we HAVE to
// Array.map Creates a NEW array and runs each item through the callback
const newArr = arr.map((item) => {
  return item += 100
})
console.log(arr);
console.log(newArr);

// Filter
const evenNumbers = arr.filter((item, idx) => {
  // What filter is looking for is a Truly or Falsy value
  // if(item % 2 === 0){
  //   return item
  // }
  return item % 2 === 0
})

console.log(evenNumbers);