'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
})

app.get('/new', (request, response) => {
  response.status(200).sendfile('./public/new.html');
})

app.get('*', (request, response) => {
  response.send('404 FILE NOT FOUND');
})

app.listen(3000, () => console.log(`You are connected to port ${PORT}`));