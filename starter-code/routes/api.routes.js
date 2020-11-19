const express = require('express')
const router = express.Router()

const Place = require('./../models/place.model')

// Endpoints
router.get('/places', (req, res) => {

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => console.log("Error:", err))  
})

module.exports = router