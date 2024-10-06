/*
    /faculty/fulltime
    /faculty/partime
*/

const express = require("express")
//const studentRouter = require("./student")
const router = express.Router()

//router.use("/test", studentRouter)

router.route("/fulltime")
    .get((req, res) => {
        res.send({message: "GET - /faculty/fulltime"})
    })
    .post((req, res) => {
        res.send({message: "POST - /faculty/fulltime"})
    })

router.get("/parttime", (req, res) => {
    res.send({message: "GET - /faculty/parttime"})
})

module.exports = router