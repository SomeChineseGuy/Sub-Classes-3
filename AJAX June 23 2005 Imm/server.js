const express = require('express');
const app = express()
const port = 8001
const cors = require('cors');
const morgan = require('morgan');

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(express.static('public'))
app.use(cors());

const db = [
  {
    id: 1,
    name: 'Joey',
    breed: 'German Shepherd',
    weight: 100
  },
  {
    id: 2,
    name: 'Sarah',
    breed: 'Corgi',
    weight: 10
  }
]

app.get('/', (req, res) => {
  // if you send html - the page will be a webpage
  // res.send('<h1>Hello this is my page</h1>')
  res.send({
    usernname: 'Kevin',
    id: 100
  })
})

app.post('/dogs', (req, res) => {
  const {dogName, dogBreed, dogWeight} = req.body;
  console.log(dogName, dogBreed, dogWeight);
  const data = {
    id: db.length,
    name: dogName,
    breed: dogBreed,
    weight: dogWeight
  }
  db.push(data)
  res.send('You have added your dog!')
})

app.get('/dogs', (req, res) => {
  res.send(db)
})


app.listen(port, () => {
  console.log(`server is on ${port}`);
})