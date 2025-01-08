const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//This code is a simple Express.js server that listens on port 3000 and sends back 'Hello World!' when a GET request is made to the root URL. However, this code can cause an error if port 3000 is already in use by another process. This can be easily resolved by checking if the port is already in use. This can also cause an error if there's a syntax error in the code.