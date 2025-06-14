const fs = require('fs');

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
          });
        });
      });
    });
  });
});
