const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// access config
dotenv.config({ path: './config/.env' });

connectDB();




app.use(express.json());



// Middlewares
app.use('/posts', () => {
    console.log("this is a middleware running")
})


// ROUTES
app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/posts', (req, res) => {
    res.send('hello post world');
})



const PORT = process.env.PORT || 8012;

app.listen(PORT, console.log(
    `Server running on port ${PORT}`
))