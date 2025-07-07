// TCP
const net = require('net');

// HTTP
const http = require('http');
const PORT = 8000;

const server = http.createServer((request, response) => {
  console.log('Someone has connected');
  if(request.url === "/") {
    response.end('<h1>Hello can you see me? </h1>')
  } else if(request.url === '/about') {
    response.end('Welcome to my about page')
  } else {
    response.end('This is an unmarked page')
  }
})

server.listen(PORT, () => {
  console.log('Server is on now');
})