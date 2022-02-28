const express = require('express');
const router = express.Router();
const Cities = require('../model/Cities');

router.get('/', (req, res) => {
    res.send('hello post world');
})

router.get('/cities', async (req, res) => {


    try {
        const cities = await Cities.find();

        return res.status(200).json({
            success: true,
            count: cities.length,
            data: cities
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'No city found'
        });
    }

})

// get specific city

router.get('/cities/:id', async (req, res) => {

    try {
        const singleCity = await Cities.findById(req.params.id);

        res.status(200).json({
            success: true,
            data: singleCity
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err
        })
    }
})

router.post('/', async (req, res) => {

    const { name, visited, noOfVisits } = req.body;

    const city = new Cities({
        name: name,
        visited: visited,
        noOfVisits: noOfVisits
    });

    try {

        await city.save();
        res.status(200).json(city);
        // res.send("city added")

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }

})



module.exports = router;