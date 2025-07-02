const net = require('net');

const server = net.createServer();
const PORT = 8080;

// Create an array to hold all of my users
const arrOfUsers = [];

// We need to KNOW when someone is connected
// the connection varaible lets me interact with anyone who is connected to me
server.on('connection', (connection) => {
  // Whenever a user is connection I will push that user into my array
  arrOfUsers.push(connection);

  console.log('Someone has connected');
  connection.write("Welcome! How are you?");

  connection.on('data', (data) => {
    for(let conn of arrOfUsers) {
      if(conn !== connection) {
        conn.write(`User said: ${data}`);
      }
    }
  })
})

// Is how I will turn on my server
server.listen(PORT, ()=> {
  console.log('Your server is on! Listening at port ' + PORT);
})