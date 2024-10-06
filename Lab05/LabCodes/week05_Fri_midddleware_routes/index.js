var express = require('express')
var studentRoutes = require('./routes/Student')
var facultyRoutes = require('./routes/Faculty')

const SERVER_PORT = 8089

var app = express()
var apiV1 = express()

//Application level middleware
app.use((req, res, next) => {
    console.log("Application Middleware")
    console.log(`${Date()} - ${req.method} - ${req.path}`)
    next()
})

//Route level middleware
app.use("/api/v1/student", (req, res, next) => {
    console.log("/Student/ Middleware")
    next()
})

apiV1.use("/student", studentRoutes)
apiV1.use("/faculty", facultyRoutes)

app.use("/api/v1/", apiV1)

//http://localhost:8089/api/v1/
app.get('/', (req, res) => {
    res.send("Home")
})

app.get("/hello", (req, res) => {
    throw new Error("Error Occured")
})

//Put after routes
//Error handling middlewarre
var errorMiddleware = (err, req, res, next) => {
    console.log("Middleware Error Handling");
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {},
        errStack: err.stack
    })
}

app.use(errorMiddleware)

app.listen(SERVER_PORT, () => {
    console.log("Server Started...")
})

console.log("...END...")