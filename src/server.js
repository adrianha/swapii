'use strict';

const PORT = 7777;

const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT);
console.log(`swapii is running on localhost: ${PORT}`);