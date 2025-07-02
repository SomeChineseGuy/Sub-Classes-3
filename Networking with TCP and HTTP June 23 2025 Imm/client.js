const net = require('net');

// const connection = net.createConnection({
//   port: 8080,
//   host: "localhost"
// });


const connection = net.createConnection({
  host: '4.tcp.us-cal-1.ngrok.io',
  port: 19858
});

// This means terminal write something
// When you press "Enter"
//  the event is going to fire the callback
process.stdin.on('data', (data) => {
  // Here "data" is what the user wrote
  // Connection.write means to send that data to the server
  connection.write(data)
})

connection.on('data', (data) => {
  console.log(`The server saids: ${data}`)
})