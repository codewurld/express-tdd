const express = require('express');
const app = express()

app.use(express.json());

// for fallbacks if file not found
app.use(express.static())