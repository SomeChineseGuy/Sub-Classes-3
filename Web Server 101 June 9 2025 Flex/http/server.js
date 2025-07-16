// Getting the HTTP library 
const http = require('http');

// const tcp = require('tcp');

const PORT = 8000;

const server = http.createServer((request, response) => {
  console.log('Someone has connected');
  if(request.url === '/') {
    // I want to do something
    response.end('<h1>Can you see this?</h1>')
  } else if(request.url === '/about') {
    response.end('<h1>Welcome to my about page </h1>')
  } else {
    response.end('<h1>This is not the homepage or the about page! </h1>')
  }
})

server.listen(PORT, () => {
  console.log('Server is now on!')
})