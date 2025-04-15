const express = require('express');
const PORT = 8080;
const morgan = require('morgan');
const app = express();

// Middleware 
// Computer talks to a server 
// Computer will make a request
// Inbetween making the request or giving the response we can add a software to do something
// Server will give a response 
app.use(morgan('dev'));
app.set('view engine', 'ejs');
// This lets you take data from a form
app.use(express.urlencoded({extended: false}));

// Database
const meals = {
  1: {
    main: "Burger",
    side: "Fries",
    drink: "Coke"
  },
  2: {
    main: "Ice Cream",
    side: "Cookie",
    drink: "Milkshake"
  },
  3: {
    main: "Ramen",
    side: "Popsticker",
    drink: "Milktea"
  }
};

// / just means homepage
app.get('/', (req, res) => {
  res.send('Hello! Welcome to the site!')
})

app.get('/menu', (req, res) => {
  const templateVars = {
    meals: meals
  }
  res.render('menu', templateVars)
})

// =============================== POST
app.post('/menu/add', (req, res) => {
  // req.body lets you see the form data. 
  // Remember req.body ONLY works in a post Request
  const meal = req.body;
  const menuLength = Object.keys(meals).length + 1
  meals[menuLength] = meal
  res.redirect('/menu')
})

app.post('/menu/delete/:id', (req, res) => {
  const id = req.params.id
  delete meals[id]
  res.redirect('/menu')
})

app.post('/menu/edit/:id', (req, res) => {
  const meal = req.body;
  const id = req.params.id
  meals[id] = meal
  res.redirect('/menu')
})
// app.get('/menu/meal1')
// app.get('/menu/meal2')
// app.get('/menu/meal3')
// app.get('/menu/meal4')
// app.get('/menu/meal5')
app.get('/menu/:id', (req, res) => {
  // capture what the user is typing in the route
  const params = req.params.id;
  if(meals[params]) {
    const templateVars = {
      meal: meals[params],
      id: params
    }
    
    return res.render('singles', templateVars)
  }

  res.send('Wrong page!')
})

app.listen(PORT, () => {
  console.log('The server is on!');
})