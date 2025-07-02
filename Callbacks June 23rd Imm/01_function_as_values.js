// function declaration
// sayHello('Josh')
// function sayHello (name) {
//   console.log(`hello ${name}`);
// }



// function expression
const sayHello2 = function(name) {
  console.log(`Hello ${name}`);
}

// sayHello2('Nathan');

// const newName = sayHello2('Aaron');

// console.log(newName);

const anotherName = sayHello2;

// console.log(anotherName('Johnson'));

const obj = {
  a: "Alvin",
  num: 100
}

console.log(obj);

const obj2 = obj;

obj2.a = "Steve"

// console.log(obj); // a: Alvin
// console.log(obj2); // a: Steve

// in order to clone 
const obj3 = {
  ...obj
}

obj3.a = 'Kevin';
console.log(obj);
console.log(obj3);