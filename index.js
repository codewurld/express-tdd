const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const postsRoute = require('./routes/posts');

// access config
dotenv.config({ path: './config/.env' });
connectDB();

app.use(express.json());



// Middlewares
app.use('/posts', postsRoute);


// IMPORT ROUTES
app.get('/', (req, res) => {
    res.send('hello world');
})





const PORT = process.env.PORT || 8012;

app.listen(PORT, console.log(
    `Server running on port ${PORT}`
))