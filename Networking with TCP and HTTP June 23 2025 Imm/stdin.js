
// Terminal WRITE something
process.stdin.on('data', (data) => {
  console.log('you wrote: ' + data);
})