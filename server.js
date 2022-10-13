const express = require('express');
const path = require('path');
const noteData = require('./db/notes.json');

const PORT = 3001;

const app = express();

// GET REQUEST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/notes', (req, res) => res.json(noteData));

// Start the server
app.listen(PORT, () => {
});

// POST
app.post('/api/notes', (req, res) => res.json(noteData){
});