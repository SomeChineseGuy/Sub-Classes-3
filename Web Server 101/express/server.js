// This is HTTP
const http = require('http');

// Require my express
const express = require('express');
const app = express();
const PORT = 8000;
const bodyParser = require('body-parser')

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

// GET REQUEST
// every URL can be made into a get or a post based on how you write it 
// app.get <----- this is a get request
// app.post <----- this is a post request
// app.delete <---- this is a delete request

const data = {
  username: "Joe",
  age: 100,
  password: "JoeisCool!",
  moreinfo: {
    newName: "Steve"
  }
}

app.get('/', (req, res) => {
  //  res.render -> the server is rendering the EJS
  res.render('home', data)
})

app.get('/about', (req, res) => {
  res.render('about')
});

// Amazon
// Toothbrush
// /product/toothbrush/1
// /product/toothbrush/2
// /product/toothbrush/3
// /product/toothbrush/4
// /product/toothbrush/5
// /product/toothbrush/6
// /product/toothbrush/7
// Catch all route

// app.get('/cars/1', (req, res) => {

// })

// app.get('/cars/2', (req, res) => {

// })

// app.get('/cars/3', (req, res) => {

// })

const carDatabase = {
  1: "Honda",
  2: "Mazda",
  3: "Ford",
  4: "Toyota"
}

// whenever we see a /: <---- this means CATCH all meaning ANYTHING you type here will work
// you have to set a variable for the params so /:nameOfVariable
app.get('/cars/:id', (req, res) => {
  // If what the user has typed in - render cars, else render an error message
  const userInput = req.params.id;
  console.log(userInput);
  // Check to see if it's in side of the object
  if(carDatabase[userInput]) {
    console.log(carDatabase[userInput]);
    const carInformation = {
      car: carDatabase[userInput]
    }
    res.render('car', carInformation)
  } else {
    res.send('This is the wrong page!')
  }
  
})

// POST REQUEST
app.post('/myname', (req, res) => {
  // req.body will ALWAYS give you user input (via a form)
  console.log(req.body.myname);
  const userInputFromForm = req.body.myname

})

app.listen(PORT, () => {
  console.log('The server is on');
})