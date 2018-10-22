'use strict';
var process = require('process');

const express = require('express');

// Constants
const PORT = 8089;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n'); 
  res.send('ACME SERVERS ROCXK');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

if (process.pid) {
   console.log('This process is your pid ' + process.pid);
}
