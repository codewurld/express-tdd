const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello post world');
})

module.exports = router;