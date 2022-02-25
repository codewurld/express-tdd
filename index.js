const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json())

// ROUTES
app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/posts', (req, res) => {
    res.send('hello post world');
})

const port = 8011;

app.listen(port, console.log(
    `Server running on port ${port}`
))