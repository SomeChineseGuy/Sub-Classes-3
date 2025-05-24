const express = require('express');
const app = express();
const PORT = 8001;
const morgan = require('morgan')


// Middleware
app.use(morgan('dev'));
app.set('view engine', 'ejs');

// Special setting to see user inputs
app.use(express.urlencoded({extended: false}));

// database
const db = {
  1: {
    main: 'Burger',
    side: 'Fries',
    drink: 'Coke'
  },
  2: {
    main: 'Smash Burger',
    side: 'Fries',
    drink: 'Soda'
  },
  3: {
    main: 'Chicken Burger',
    side: 'Ice Cream',
    drink: 'Root Beer'
  }
}


// Browse - being able to see EVERY item in the menu
app.get('/menu/', (req, res) => {
  // We can only place objects inside of our res.render
  // Whatever we add in the res.render we need to wrap it in another object
  const templateVars = {
    db: db
  }
  res.render('menu', templateVars)
})

// Read - Seeing ONE item
// :id - this means a catch ALL, so anything after the / is a route
app.get('/menu/:id' , (req, res) => {
  const id = req.params.id;
  if(!db[id]) {
    return res.send('This is not a menu item');
  }

  const templateVars = {
    db: db[id]
  }
  res.render('single', templateVars);
})

// Add - add items to the menu
// Post request
// Everything you do in the browser is a GET request
app.post('/menu/add', (req, res) => {
  const menuItem = req.body;
  const key = Object.keys(db).length + 1;
  db[key] = menuItem;
  res.redirect('/menu')
})

// Update/Edit
app.post('/menu/edit/:item', (req, res) => {
  const newItem = req.body;
  const menuItem = req.params.item

  db[menuItem] = newItem;
  res.redirect('/menu')
})

// Delete
app.post('/menu/delete/:item' , (req, res) =>{
  const item = req.params.item;
  delete db[item]
  res.redirect('/menu')
})


app.get('/', (req, res) => {
  res.send('<h1>Can you see this?</h1>')
})

app.listen(PORT, () => {
  console.log('The server is on PORT: ' + PORT);
});