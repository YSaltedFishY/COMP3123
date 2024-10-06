const express = require("express")
const studentRouter = require("./routes/student")
const facultyRouter = require("./routes/faculty")
const fs = require("fs")

const SERVER_PORT = 3001
const app = express()



app.use((req, res, next) => {
    console.log(new Date())
    next()
})

app.use((req, res, next) => {
    const data = `${req.method} - ${new Date()} - ${req.url}\n`
    console.log(data)
    fs.appendFile("./logs", data, () =>{

    })
    next()
})

let sayHello = (req, res, next) => {
    console.log("SAY HELLO")
    next()
}

app.use(express.json())

//Adding student routes
//app.use(studentRouter)
app.use("/api/v1/student", studentRouter)
app.use("/faculty", facultyRouter)
//app.use("/teacher", facultyRouter)
//app.use("/professors", facultyRouter)



app.use("/hello",sayHello)

app.route("/hello")
    .get((req, res) => {
        res.status(200).send({message: "GET - /Hello"})
    })
    .post((req, res) => {
        res.status(200).send({message: "POST - /Hello"})
    })
    .put((req, res,  next) => {
        //res.status(200).send({message: "PUT - /Hello"})
        next(new Error('BROKEN'))
    })
    .delete((req, res) => {
        res.status(200).send({message: "DELETE - /Hello"})
    })

    app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500).send('Something broke!')
    })

app.listen(SERVER_PORT, () => {
    console.log(`Server running http://localhost:${SERVER_PORT}/`)
})

/*
    /api/v1/student/fulltime
    /api/v1/student/partime
    /api/v1/student/sessional


    /faculty/fulltime
    /faculty/partime

*/