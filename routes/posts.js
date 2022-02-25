const express = require('express');
const router = express.Router();
const Cities = require('../model/Cities');

router.get('/', (req, res) => {
    res.send('hello post world');
})

router.get('/specific', async (req, res) => {
    res.send('my specific post');
})

router.post('/', async (req, res) => {

    const { name, visited, noOfVisits } = req.body;

    const city = new Cities({
        name: name,
        visited: visited,
        noOfVisits: noOfVisits
    });

    try {
        if (!city) {
            res.status(404).send('No city found')
        }

        await city.save();
        res.json(city);
        // res.send("city added")

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }

})

module.exports = router;