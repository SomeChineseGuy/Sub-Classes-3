const express = require('express');
const app = express();
const PORT = 8000;

// Verb and the route
// Get and '/about'

// Express is open source
// People building extra express libraries are usually in the form of a middleware

// Adding EJS support 
// Middleware
app.set('view engine', 'ejs')

const database = {
  a: 'chicken wing',
  b: 'bread',
  c: 'Mac and cheese'
}

// database[1] chicken wind
// database[2] bread
// database[3] mac and cheese
// database[100] undefined
// database[something] undefined
// /menu/1 Chicken Wing
// /menu/2 Bread
// /menu/4 Error

app.get('/menu/:id', (req, res) => {
  
  const userInput = req.params.id;
  console.log(database[userInput], userInput);
  const templateVars = {
    database,
    username: 'Alvin',
    items: {
      a: 'Burger'
    },
    arr: [1,2,3,4,5]
  }
  if(database[userInput]) {
    // res.render('name of ejs file', {object of data})
    res.render(`menuItem`, templateVars);
    
  } else {
    res.send('NOT in the menu')
  }
})

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  // Still do some kind of logic
  res.render('about')
})

// /product <---- show a list of ALL the products
// /product/1 <----- this is going to show a product single

// app.get('/product/1')
// app.get('/product/2')
// app.get('/product/3')
// app.get('/product/4')

app.get('/product/:id', (req, res) => {
  // If you want to find what URL the user is in for the /:id
  // log the request coming in from the client
  console.log(req.params.id);
  console.log(req.body);
  console.log(req.cookie);
  const userInput = req.params.id;
  if(Number(userInput) < 10) {
    res.send('This is correct')
  } else {
    res.send('Wrong page!')
  }
})

// /: <---- Means EVERYTHING
app.get('/:all', (req, res) => {
  res.send('This is the wrong page! Please go back to the home page!')
})

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
})