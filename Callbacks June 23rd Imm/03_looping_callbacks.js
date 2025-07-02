const names = ["Jason", "Sarah", "Andy"];
const nums = [1, 20, 40, 50]

const loopOverArray = function(arr, callback) {
  for(let item of arr) {
    callback(item)
  }
}

loopOverArray(nums, function (item) {
  console.log(item + 100);
});

// const loopOverArray2 = function(arr, callback) {
//   for(let item of arr) {
//     console.log(`Goodbye ${item}`);
//   }
// }

