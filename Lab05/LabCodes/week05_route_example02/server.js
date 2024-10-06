const express = require('express');
const fs = require("fs");
var dateFormat = require('dateformat');
//------------
var books = require("./Books")
var computers = require("./Computers")

const app = express();
const router = express.Router();

let writeData = (data) => {
    data += "\n"
    fs.appendFile('server_log.txt', data, function (err) {
      if (err) throw err;
      console.log('Log Saved!');
    });
  }

//Middleware function
let logger = (req, res, next) => {
    const todays = dateFormat(Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT");
    let data  = `[${todays}] - ${req.originalUrl}`
    writeData(data)
    next()
  }
  
//Add the middleware 
app.use(logger);

/*
app.get('/book', function (req, res) {
  res.send('GET - Get a random book')
})

app.post('/book',function (req, res) {
  res.send('POST - Add a book')
})

  app.put('/book',function (req, res) {
  res.send('PUT - Update the book')
})
*/

let booksM = (req, res, next) => {
  console.log("Books calles");
  next()
}
//app.use("/books", booksM);
app.use("/books", booksM, books)
app.use("/books/computer", computers)

/*
  /books/education/game
  /books/health/heart
  /books/health/lungs
*/



 app.listen(process.env.port || 8081);

 console.log('Web Server is listening at port '+ (process.env.port || 8081));