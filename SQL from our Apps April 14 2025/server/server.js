const express = require('express');
const app = express();
const PORT = 8080;
const pg = require('pg');

const Client = pg.Client; // Single connection to my DB

const config = {
  host: 'localhost',
  port: 5432,
  user: 'alvinng',
  password: 'alvinng',
  database: 'movie_villains'
}

const client = new Client(config);
const morgan = require('morgan');
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.set('view engine', 'ejs');

// I want to create a route that will QUERY my Database


// establish a connection 
client.connect();

app.get('/', (req, res) => {
  res.render('index')
})

// CRUD
app.get('/api/villains', (req, res) => {
  client.query('SELECT * FROM movie_villains;')
    .then(resp => {
      console.log(resp.rows);
      res.send(resp.rows)
    }).catch(err =>{
      console.log(err);
    })
})

app.get('/api/villains/:id', (req, res) => {
  const userInput = req.params.id;
  client.query('SELECT * FROM movie_villains WHERE id = $1;', [userInput])
    .then((resp) => {
      console.log(resp.rows);
      res.send(resp.rows);
    }).catch((err) => {
      console.log(err);
      
      res.send({
        message: 'Wrong id'
      })
    })
})

app.post('/api/villains/add', (req, res) => {
  const movieName = req.body.movieName;
  const movieVillain = req.body.movieVillain;
  const insertQuery = 'INSERT INTO movie_villains(villain, movie) values($1, $2) RETURNING *;'
  client.query(insertQuery, [movieVillain, movieName])
  .then(resq => {
    console.log(resq.rows);
    res.send(resq.rows)
  }).catch(err => {
    console.log(err);
    res.send('There was an error adding to the database')
  })
  
})


app.listen(PORT, (req, res) => {
  console.log('You are now connected');
})