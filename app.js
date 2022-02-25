// const express = require('express');
// const app = express()
// // creates a new router object
// const router = express.Router();

// // parses incoming data to json
// app.use(express.json());

// // for fallbacks if file not found
// // app.use(express.static(__dirname + '/public'))

// // middleware are functions that have access to req, res and next()
// // Performs the following tasks -> execute code -> make changes to req & res objects -> end req-response scycle -> call the next middleware function in the stack

// // parses incoming requests with urlencoded payloads
// app.use(express.urlencoded())

// app.get('/', (req, res) => {
//     res.send('hello world')
// })


// const PORT = 3002 || 3005

// app.listen(PORT, console.log(`Server running on port ${PORT}`))