var http = require("http");
//TODO - Use Employee Module here
var emp=require("./Employee.js");
const employees = require("./Employee.js");

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('<h1>Welcome to Lab Exercise 03</h1>');
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.setHeader('Content-Type','application/json;charset=utf-8');
            return res.end(JSON.stringify(emp));
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            
            res.setHeader('Content-Type','application/json;charset=utf-8');

            let eNames = emp.map(employees => `${employees.firstName} ${employees.lastName}`)
            eNames.sort();

            return res.end(JSON.stringify(eNames));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  

            res.setHeader('Content-Type','application/json;charset=utf-8');

            let totalSalary = emp.reduce((sum,e) => sum + e.Salary, 0);
            let output = {"total_salary": totalSalary}

            return res.end(JSON.stringify(output));
        }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})