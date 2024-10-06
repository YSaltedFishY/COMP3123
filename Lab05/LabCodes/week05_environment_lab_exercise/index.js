//https://www.freecodecamp.org/news/express-explained-with-examples-installation-routing-middleware-and-more/
const config =  require('./config/config');
let express = require('express')
let fs = require("fs")
const morgan_logger = require('morgan');

let app = express()

console.log(`NODE_ENV=${config.NODE_ENV}`);

//Morgan logger
app.use(morgan_logger('common'));

app.use('/static', express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

let logger = (req, res, next) => {
    /* 
        Write data to server_log.txt file
        Write date and time along with url, HTTP method
        Example :
            POST - / - Mon Oct 04 2021 17:45:22 GMT-0400 (Eastern Daylight Time)
            GET - /hello - Mon Oct 04 2021 17:45:22 GMT-0400 (Eastern Daylight Time)
            POST - /hello - Mon Oct 04 2021 17:45:22 GMT-0400 (Eastern Daylight Time)
            GET - /name - Mon Oct 04 2021 17:45:22 GMT-0400 (Eastern Daylight Time)
    */
    let data = `${req.method} - ${req.path} - ${Date()}\n`
    fs.appendFile('server_log.txt', data, (err) => {
        if(err) throw err
        console.log("Log saved...")
    })
    next()
}

//Middleware to log dates of request
app.use(logger)

/*
, (req, res, next) => {
    console.log("Hello")
    next()
}
*/
//console.log(process.env);

app.get('/home', (req, res) => {
    //res.render('index');
    res.render('index', { title: 'Hello from Pug', message: 'Hello Express NodeJS!' });
});

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.get("/name", (req, res) => {
    res.send("Pritesh Patel")
})

app.route("/hello")
    .get((req, res) => {
        res.send("<h1>Hello GET")
    })
    .post((req, res) => {
        res.send("<h1>Hello POST")
    })
    .delete((req, res) => {
        res.send("<h1>Hello DELETE")
    })

//console.log(process.env)
//PORT=1234 npm run dev
let SERVER_PORT = process.env.PORT || 8089
//app.listen(SERVER_PORT)
//console.log("Server running at " + SERVER_PORT)

app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})

console.log(__dirname)


/*
http://localhost:8082/books/:id
http://localhost:8082/books/search/:id

http://localhost:8082/books/author
http://localhost:8082/books/author/address
http://localhost:8082/books/author/address/city

http://localhost:8082/books/publication
http://localhost:8082/books/publication/address
*/