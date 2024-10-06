const express = require("express")
const routes = express.Router()

routes.route("/game")
    .get((req, res) => {
        res.send('GET - /books/computer/game')
    })

routes.route("/java")
    .get((req, res) => {
        res.send('GET - /books/computer/java')
    })

routes.route("/python")
    .get((req, res) => {
        res.send('GET - /books/computer/python')
    })

module.exports = routes
