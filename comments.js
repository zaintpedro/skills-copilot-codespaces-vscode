// Create a web server

// 1. Require express
const express = require('express');

// 2. Create an instance of express
const app = express();

// 3. Define a route handler for the default home page
//    (GET) /comments
app.get('/comments', (req, res) => {
  // 4. Send back a response with the comments
  res.send([
    {
      id: 1,
      username: 'alice',
      content: 'first comment',
    },
    {
      id: 2,
      username: 'bob',
      content: 'second comment',
    },
    {
      id: 3,
      username: 'charlie',
      content: 'third comment',
    },
  ]);
}