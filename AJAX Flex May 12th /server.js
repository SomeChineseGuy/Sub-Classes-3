const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const port = 8001;



 


// middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cors())
// data
const dogs = [
  {
    id: 'abc',
    name: 'Dioji',
    breed: 'german shepherd',
    weight: 100
  },
  {
    id: 'def',
    name: 'Clifford',
    breed: 'big and red',
    weight: 1000
  },
  {
    id: 'ghi',
    name: 'Rusty',
    breed: 'cross labradour and german shepard',
    weight: 60
  },
];

app.get('/', (req, res) => {
  res.send({
    username: 'Alvin',
    num: 100,
    isAdmin: false
  })
})

app.get('/dogs', (req, res) => {
  res.send(dogs)
})

app.post('/dogs', (req, res) => {
  console.log(req.body);
  const {name, breed, weight} = req.body;
  const id = Math.random().toString(36).substring(2,5)
  const dogObj = {
    name,
    breed,
    weight,
    id
  }
  dogs.push(dogObj)
  res.json(dogs)
})

app.listen(port, () => {
  console.log('Server is on!');
})