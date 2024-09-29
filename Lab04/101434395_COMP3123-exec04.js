const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Server is online');
    res.end();
});

app.get('/hello', (req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello Express JS');
    res.end();
});

//Default when first and last name value is not provided
app.get('/user', (req,res)=>{
    const firstName = req.query.firstName || 'HaoYun';
    const lastName = req.query.lastName || 'Yang';
    res.json({"First name":firstName,"last name":lastName});
});

//Return first name and last name in Json format when provided
app.get('/user/:firstName/:lastName', (req,res) => {
    const fName = req.params.firstName;
    const lName = req.params.lastName;
    res.json({"First name":fName,"last name":lName});
});
//POST user
app.post('/user/:firstName/:lastName', (req,res) => {
    const fName = req.params.firstName;
    const lName = req.params.lastName;
    res.json({"First name":fName,"last name":lName});
});

const port = process.env.PORT || 8081;
app.listen(port, ()=> {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});