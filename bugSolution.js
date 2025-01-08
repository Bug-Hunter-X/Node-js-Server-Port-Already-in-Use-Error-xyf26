const express = require('express');
const app = express();
const port = 3000;
const isPortAvailable = require('is-port-available');
isPortAvailable(port).then(available => {
  if (available) {
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } else {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
  }
});