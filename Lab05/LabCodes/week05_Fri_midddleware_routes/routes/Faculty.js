var express = require('express')

var facultyRoutes = express.Router()

facultyRoutes.route("/")
    .get((req, res) => {
        res.send("<h2>GET - Faculty")
    })
    .post((req, res) => {
        res.send("<h2>POST - Faculty")
    })

facultyRoutes.get("/fulltime" , (req, res)=>{
    res.send("<h2>GET - Full Time Faculty")
})

facultyRoutes.post("/fulltime" , (req, res)=>{
    res.send("<h2>POST - Full Time Faculty")
})

facultyRoutes.get("/parttime" , (req, res)=>{
    res.send("<h2>GET - Part Time Faculty")
})

module.exports = facultyRoutes