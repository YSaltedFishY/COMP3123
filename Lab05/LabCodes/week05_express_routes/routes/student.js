/*
    /api/v1/student/fulltime
    /api/v1/student/partime
    /api/v1/student/sessional
*/
const express = require("express")
const router = express.Router()

router.route("/fulltime")
    .get((req, res) => {
        const data = req.body
        console.log(data.name)
        res.send({body: data , message: "GET - /student/fulltime"})
    })
    .post((req, res) => {
        const stud = {
            id: 101,
            first_name: "Pritesh",
            last_name: "Patel"
        }
        res.send({student: stud, message: "POST - /student/fulltime"})
    })

router.get("/parttime", (req, res) => {
    res.send({message: "GET - student/parttime"})
})

router.post("/sessional", (req, res) => {
    res.send({message: "POST - student/sessional"})
})

module.exports = router
