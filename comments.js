// Create a web server

// Import the express module

const express = require('express');

// Create an express application

const app = express();

// Import the body-parser module

const bodyParser = require('body-parser');

// Import the comments module

const comments = require('./comments');

// Configure express to use body-parser as middleware.

app.use(bodyParser.urlencoded({ extended: false }));

// Configure express to serve static files from the 'public' folder

app.use(express.static('public'));

// Set the view engine to ejs

app.set('view engine', 'ejs');

// Render the comments page for the path '/comments'

app.get('/comments', (req, res) => {
    res.render('comments', { comments: comments });
});

