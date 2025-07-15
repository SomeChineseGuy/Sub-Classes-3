// We only use promises when we use a API function (Not a built in JS function)

const data = fetch("https://official-joke-api.appspot.com/random_joke")
data.then((res) => {
  // take the raw website data and formatted into the data I can read
  return res.json()
})
.then((data) => {
  console.log(data);
})
.catch(err => {
  console.log(err);
})