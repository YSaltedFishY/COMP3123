//Node.js file system Module --Installed library npm install fs
/*Uses:
Read Files
Write Files
Append Files
Close Files
Delete Files*/

/*Key Features
-Asynchronous and Synchronous Methods: provides both non-blocking and blocking methods
    for various file operations.
-Error Handling: includes robust error handling to manage issue such as file not found or premission denied.*/
const fs = require('fs');
const http = require('http');


// fs.readFile("./Lab04/input.txt", function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log("Asynchronous read: " + data.toString());
// });

// //Synchronous approach
// const data = fs.readFileSync('./Lab04/input.txt');
// console.log("Synchronous read: "+data.toString());

// //Asynchronous - Opening file
// console.log("opening file!");
// let myFile = fs.open("./Lab04/input.txt","r+",function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("File open successfully: " + fd);
// });

// //
// buf = Buffer.alloc(1024);
// console.log("opening an existing file");
// fs.open("./Lab04/input.txt","r+",function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("File opened successfully");
//     console.log("start reading the file");

//     fs.read(fd,buf, 0 ,buf.length, 3, function(err,bytes){
//         if (err){
//             console.log(err);
//         }

//         if(bytes > 0){
//             console.log(buf.slice(0,bytes).toString());
//         }
//     });
// });

// //Read file without buffer
// fs.readFile("./Lab04/input.txt", 'utf8', function(err, data) {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// fs.readFile('./Lab04/data.json', 'utf8',(err,data) =>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     const jsonData = JSON.parse(data);
//     console.log(jsonData);
// });

// //
// console.log("Writing into existing file");
// fs.write("./Lab04/input.txt","My new writing indisde input.txt","utf8",function(err){
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File written successfully");
//     console.log("Lets read newly written data");
// });


// //Append data to file
// let data1 = "\nNew line will be added to input.txt";
// fs.appendFile(
//     "./Lab04/input.txt", data1, "utf8",
//     function (err){
//         if (err){
//             console.log(err);
//         }
//         console.log("File appended successfully");
//     }
    
// );

// let data2 = "\n Another new line will be added to input.txt";
// fs.appendFileSync("./Lab04/input.txt", data2, "utf8");
// console.log("File appended successfully");

// //Closing the file
// file_descriptor = fs.openSync("./Lab04/input.txt");
// console.log("File is opened and the file descriptor is: " + file_descriptor);

// setTimeout(myFun, 5000);
// function myFun(){
//     fs.close(file_descriptor, function(err){
//         if(err){
//             console.error('Error closing the file: '+ err);
//         }else{
//             console.log(">>>File closed successfully");
//         }
//     });
// };

// //Delete file
// console.log("deleting file");
// fs.unlink("./Lab04/temp.txt",function(err){
//     if(err){
//         return console.error(err);
//     }
//     console.log("File deleted successfully");
// });

// //Reading html file
// //Inappropriate syntax: ERROR
// fs.readFile('myWebPage.html', function(err, data){
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// http.createServer(function (req, res) {
//     fs.readFile('myWebPage.html', function(err, data){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);
// console.log("Server running at http://127.0.0.1:8080/");

var url = require('url');
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);

    var filename = "." + q.pathname;

    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end("404 not found")
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.writeHead(data);
        return res.end();
    });
}).listen(8080);

