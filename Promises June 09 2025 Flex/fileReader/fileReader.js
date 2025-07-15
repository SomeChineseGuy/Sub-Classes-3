const fs = require('fs');

// This only happens
// when JS is using another "API" that is not in the langauge
// Being out of sync/async
//setTimeout

fs.readFile('./data1.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('data', data);
  fs.readFile('./data2.txt', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log('data', data);
    fs.readFile('./data3.txt', 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      console.log('data', data);
      fs.readFile('./data3.txt', 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        console.log('data', data);
        fs.readFile('./data3.txt', 'utf8', (err, data) => {
          if (err) {
            throw err;
          }
          console.log('data', data);
          fs.readFile('./data3.txt', 'utf8', (err, data) => {
            if (err) {
              throw err;
            }
            console.log('data', data);
            fs.readFile('./data3.txt', 'utf8', (err, data) => {
              if (err) {
                throw err;
              }
              console.log('data', data);
            });
          });
        });
      });
    });
  });
});
