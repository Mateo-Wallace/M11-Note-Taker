// Global Modules
const fs = require('fs');
const path = require('path');

// Third Party Modules
const express = require('express');

// Local Modules
const api = require('./routes/index.js')

// Global Variables
const PORT = process.env.PORT || 3001;
const app = express();

// // Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Connects all files in public folder. Ex. html to css to js
app.use(express.static('public'));

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Listens for requests to serve to client
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);