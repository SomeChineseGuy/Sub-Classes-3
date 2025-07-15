const returnPromise = (value, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), delay);
  });
};

const returnRejectedPromise = (value, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(`doh! rejected: ${value}`), delay);
  });
};

const returnRandomPromise = (value, delay = 1000) => {
  const num = Math.floor(Math.random() * 2);
  if (num < 1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`yay! resolved!: ${value}`), delay);
    });
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(`doh! rejected: ${value}`), delay);
  });
};

module.exports = {
  returnPromise,
  returnRejectedPromise,
  returnRandomPromise
}

new Promise((reslove, reject) => {
  const data = "Go get data from a database";
  if(data) {
    return reslove(data)
  } else {
    return reject(`You could not get the data: ${data}`)
  }
})