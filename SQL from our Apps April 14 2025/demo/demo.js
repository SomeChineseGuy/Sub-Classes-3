const pg = require('pg');

const Client = pg.Client;
// const Pool = pg.Pool;

// I need to tell my backend what DB to connect to
const config = {
  host: 'localhost',
  port: 5432,
  user: 'alvinng',
  password: 'alvinng',
  database: 'movie_villains'
}

const client = new Client(config);
// Establish a connection


// now I can connect to my client
// client.query('SELECT * from movie_villains;')
//   .then((res) => {
//     console.log(res.rows);
//   })
// // This is going to end the connection
//     client.end();


// CRUB/BREAD
// node demo.js browse 10

const verb = process.argv[2];
const id = process.argv[3];

// console.log(verb, id);

// if(verb === 'browse') {
//   // then return the whole database
// } else if(verb === 'read') {
//   // then read one item from that database
// }
client.connect();
switch(verb) {
  case 'browse' :
    client.query('SELECT * FROM movie_villains;')
      .then(res => {
        console.log(res.rows);
        client.end();    
      })
    
  break
  case 'read' :
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id]).then(res => {
      console.log(res.rows);
      client.end();
    })
  case 'edit' :
    const newName = process.argv[4];
    client.query('Update movie_villains set villain = $1 where id = $2 RETURNING *;', [newName, id])
      .then(res => {
        console.log(res.rows);
        client.end();
      })
  break
  case 'add' :
      const movieVillainName = process.argv[3];
      const movieName = process.argv[4];
      const insertQuery = 'INSERT INTO movie_villains(villain, movie) values($1, $2) RETURNING *;'
      client.query(insertQuery, [movieVillainName, movieName])
        .then((res) => {
          console.log('Villian was inserted.');
          console.log(res.rows);
          client.end();
        })
  break
  case 'delete' :
        const deleteQuery = 'DELETE FROM movie_villains WHERE id = $1';
        client.query(deleteQuery, [id])
          .then(() => {
            console.log('Your Movie Villian was removed!');
            client.end();
          })
  break

  default: 
    console.log('Please pick from the BREAD options');
    client.end();
}

// disconnect from database

// Switch operator?