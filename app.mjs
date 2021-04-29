// Node.js code
// If you were running locally you would have to download Node.js - run npm install and then node app.js
// 

import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

// Get request and dummy html response
app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

// Dummy database connection code which doesn't really connect but sets a timer for 1 second until server is launced.
await connectToDatabase();

// Set up a web server on port 3000 which will listen to get requests and send back dummy html
app.listen(3000);
