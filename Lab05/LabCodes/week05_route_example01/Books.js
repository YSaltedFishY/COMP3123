const express = require("express")
const route = express.Router()

route.route('/')
    .get((req, res) => {
        res.send('GET - Get a random book')
    })
    .post((req, res) => {
        res.send('POST - Add a book')
    })
    .put((req, res) => {
        res.send('PUT - Update the book')
    })

module.exports = route