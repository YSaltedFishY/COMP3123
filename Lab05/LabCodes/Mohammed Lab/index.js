/* Using Routes (Get)
• We have seen a basic application which serves HTTP
request for the homepage. Routing refers to
determining how an application responds to a client
request to a particular endpoint, which is a URI (or
path) and a specific HTTP request method (GET,
POST, and so on).
- GET: To get data,
- POST: To submit data,
- PUT: To update data,
- DELETE: To destroy data
Here is a simple example which passes two values
using HTML FORM GET method. We are going to
use process_get router inside index.js to handle this
input. */

// var express = require('express');
// var app = express();

// /*Use the express.static built-in middleware function
// To serve static files such as images, CSS files, and JavaScript, files if there are!!*/
// app.use(express.static('public'));

// app.get('/index.htm', function (req, res) {
// /* __dirname is an environment variable that tells you the absolute path 
// of the directory containing the currently executing file. */
// res.sendFile( __dirname + "/" + "index.html" );
// /* The res.sendFile() function transfers the file at the given path  and 
// it sets the Content-Type response HTTP header field based on the filename extension.*/
// })

// app.get('/process_get', function (req, res) {
// // Prepare output in JSON format
// response = {
//     //// without creating query string, the response will be as query string  
// first_name:req.query.fn,
// last_name:req.query.ln
// };
// console.log(response); // just print in terminal 
// res.end(JSON.stringify(response)); // send as JSON
// //res.JSON(response);
// })

// app.listen(8081, function () {

//     console.log("My server is running");

// });
// // var server = app.listen(8081, function () { //assign the function to 'server' veriable
// // //var host = server.address().address
// // //var port = server.address().port
// // //console.log("HOST : ",host); // ::
// // //console.log("PORT : ",port); // 8081
// // console.log("Example app listening at http://%s:%s", host, port) //%s its veriable substition 
// // })

///// **************************************************************************************
// /* Using Routes (Post) 
// Here is a simple example which passes two values using HTML
// FORM POST method. We are going to use process_get router
// inside index.js to handle this input.*/
// var express = require('express');
// var app = express();

// /* Bodyparser: The BodyParser is a library in Node.js. 
// Body Parsing is used to parse the body of an incoming HTTP request in a middleware. 
// It captures the HTTP request generated by clients on the server when they submit a form, 
// makes an API request, etc. The data information is included in the HTTP request.  */

// /*To handle HTTP POST requests in Express.js, 
// you need to install the middleware module called body-parser. 
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
// The middleware was a part of Express.js earlier but now you have to install it separately.
// This body-parser module parses the JSON, buffer, string and URL encoded data submitted 
// using HTTP POST request.  */
// /*bodyParser. urlencoded([options]) Returns middleware that only parses urlencoded bodies 
// and only looks at requests where the Content-Type header matches the type option. */

// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false})

// app.use(express.static('public'));

// app.get('/index2.html', function (req, res) {
// res.sendFile( __dirname + "/" + "index2.html" );
// })

// app.post('/process_post', urlencodedParser, function (req, res) {
// // Prepare output in JSON format
// response = {
// first_name:req.body.fn,
// last_name:req.body.fn
// };
// console.log(response);
// res.end(JSON.stringify(response));
// })
// var server = app.listen(8081, function () {
// // var host = server.address().address
// // var port = server.address().port
// // console.log("Example app listening at http://%s:%s", host, port)
// })

///// **************************************************************************************

// const express = require('express');
// var fs = require('fs');
// const app = express();
// // /* The express.Router() function is used to create a new router object. 
// // This function is used when you want to create a new router object in your program 
// // to handle requests.  
// // last class we used it to import [const routes = require('./routes.js');]
// // */
// // //const router = express.Router();
// // ////-----------------------------------------------
// //// use Return myWebPage.html page as a response to client if he call get method with URL 'welcome'
// // http://127.0.0.1:8081/welcome
// app.get('/Welcome', (req, res) => {
//   fs.readFile('myWebPage.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// });
// // ////-----------------------------------------------
// // Sample data (replace this with a database in a real-world scenario)
// let books = [
//     { id: 1, title: 'Express', author: 'John' },
//     { id: 2, title: 'Node.js', author: 'Jane' },
// ];

// // GET method to retrieve all books
// // http://127.0.0.1:8081/books
// app.get('/books', (req, res) => {
//     res.json(books);
// });
// ////-----------------------------------------------
// // Get method with check if ID exist or not
// app.use(express.static('public'));
// app.get('/index3.html', function (req, res) {
// res.sendFile( __dirname + "/" + "index3.html" );
// })
// ////Open index3.html and Submit the form.
// app.get('/check', (req, res) => {
// const myId=req.query.id;
//     let c=false;
//     for (const [key, value] of Object.entries(books))
//         { if(value.id==myId){c=true; break;}}

//         if(c==true){res.send(`The ${myId} exist`);}
//         else{res.send(`The ${myId} does not exist`);}
// });
// //-----------------------------------------------
// // http://127.0.0.1:8081/Hello
// app.get('/Hello', (req, res) => {
//  fs.readFile('data.json', 'utf8', (err, data) => {
//   //JSON.parse() to transform it into a JavaScript object.
//   const jsonData = JSON.parse(data);
//   res.end("Hello : "+jsonData.name);
// });
// });
// ////-----------------------------------------------
// // Check the name exist or not.
// // Open index4.html and submit the form.
// app.get('/CheckJson', (req, res) => {
//     fs.readFile('data.json', 'utf8', (err, data) => {
//      //JSON.parse() to transform it into a JavaScript object.
//      const myName=req.query.N;
//      const jsonData = JSON.parse(data);
//      if(jsonData.name==myName){res.send(`This Name: ${myName} is Exist`);}
//      else{res.send(`This Name: ${myName} is not Exist`);}
//    });
// });
// ////-----------------------------------------------
// //app.use('/', router);
// app.listen(process.env.port || 8081);
// console.log('Web Server is listening at port '+ (process.env.port || 8081));


// ///// **************************************************************************************
/* Using middleware
Express is a routing and middleware web framework that has minimal 
functionality of its own: An Express application is essentially a series of middleware 
function calls. */

// const express = require('express')
// const app = express()


// /*
// const express = require('express')
// const app = express()

// example of a simple “Hello World” Express application.
// - get : HTTP method for which the middleware function applies.
// - '/': Path (route) for which the middleware function applies.
// - function (req, res, next): The middleware function.
//         - req: HTTP request argument to the middleware function, called "req" by convention.
//         - res: HTTP response argument to the middleware function, called "res" by convention.
//         - next: Callback argument to the middleware function, called "next" by convention.
// app.get('/', function (req, res, next) => {
//   res.send('Hello World!')
// })

// app.listen(3000)
// */

// /* Here is a simple example of a middleware function called “myLogger”. 
// This function just prints “LOGGED” when a request to the app passes through it. 
// The middleware function is assigned to a variable named myLogger. */
// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }
// /* Every time the app receives a request, it prints the message “LOGGED” to the terminal.
//    The order of middleware loading is important: middleware functions that are loaded first 
//    are also executed first. */
// app.use(myLogger)
// // http://127.0.0.1:3000
// app.get('/', (req, res) => {
//     console.log("Get started is the  next");
//   res.send('Hello World!')
// })
// app.listen(3000)

///// **************************************************************************************

// /* Middleware can also be declared in an array for reusability.
// This example shows an array with a middleware sub-stack that 
// handles GET requests to the /user/:id path */
// const express = require('express')
// const app = express()

// function logOriginalUrl (req, res, next) {
//     console.log('Request URL:', req.originalUrl) // /user/123
//     next()
//   }
  
// function logMethod (req, res, next) {
//     console.log('Request Type:', req.method) //Get
//     next()
//   }
  
//   const logStuff = [logOriginalUrl, logMethod] //array for reusability
//   //app.use(logStuff);
//   // http://127.0.0.1:3000/user/123
//   app.get('/user/:id', logStuff, (req, res, next) => {
//      const userId = req.params.id; 
//      res.send(`User with ID: ${userId}`);
//   })

// app.listen(3000)

///// **************************************************************************************
//  /* Using Regular Expression */
// const paragraph = 'The ABC quick brown fox jumps over the lazy dog. HLO  It barked.';
// const regex = /[A-Z]{3}/g; // any 3 letters in Capital , g group if found more than item.
// const found = paragraph.match(regex);

// console.log(found);
// // ['ABC','HLO']

// const paragraph2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// const regex2 = /[A-E]/gi; // g group i ignore case sinsitve 
// const found2 = paragraph2.match(regex2);

// console.log(found2);
// // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

// //// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match  

///// **************************************************************************************
/* Serving static files in Express
Static files are files that clients download as they are from the server.
To serve static files such as images, CSS files, and JavaScript files, 
use the express.static built-in middleware function in Express.
You simply need to pass the name of the directory where you keep your static assets, 
to the express.static middleware to start serving the files directly. 
For example, if you keep your images, CSS, and JavaScript files in a directory named public.
The function signature is: app.use(express.static('public’)); 

Create a new directory, public express, by default does not allow you to serve static files. 
You need to enable it using the following built-in middleware app.use(express.static('public’));.
 */

// const express = require('express')
// const app = express()
// //run the server and click to download and open these files 
// app.use(express.static('public'));
// //http://localhost:3000/test.txt
// app.use(express.static('images'));
// //http://localhost:3000/test.jpg

// /**
//  To create a virtual path prefix (where the path does not actually exist in the file system) 
//  for files that are served by the express.static function, 
//  specify a mount path for the static directory, as shown below:
//  */
//  app.use('/static', express.static('public'))
//  /* Now, you can load the files that are in the public directory from the /static path prefix. */
//  //http://localhost:3000/static/test.txt
 
// app.listen(3000)
// console.log("Server http://127.0.0.1:3000 is running")

///// **************************************************************************************