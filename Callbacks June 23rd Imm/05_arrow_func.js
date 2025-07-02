const sum = function(num1, num2) {
  console.log(this)
  return num1 + num2
}

console.log(sum(10, 20));

const sum2 = (num1, num2) => {
  console.log(this)
  return num1 + num2
}

console.log(sum2(10, 10)); 

const numArr = [10, 20, 30]

const loopingArr = (arr, callback) => {
  for(let item of arr) {
    callback(item)
  }
}

loopingArr(numArr, (item) => {
  console.log(item + 100);
})
