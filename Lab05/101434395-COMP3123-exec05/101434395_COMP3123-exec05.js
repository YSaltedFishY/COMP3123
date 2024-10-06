const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');

app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get(['/home','/'], (req,res) => {
  res.sendFile(__dirname + "/" + "home.html");
});

/*
- Return all details from user.json file to client as JSON format
*/
const userData = require(__dirname + "/" + "./user.json")
router.get('/profile', (req,res) => {
  res.json(userData);
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req,res) => {
  res.sendFile(__dirname + "/" + "login.html");
});


router.post('/login', (req,res) => {
  //console.log('Request body:', req.body);
  const {username, password} = req.body;

  // console.log(userData.username);
  // console.log(username);
  if (username !== userData.username){
    return res.json({
      status: false,
      message: 'User name is invalid'
    });
  }else if(password !== userData.password){
    return res.json({
      status: false,
      message: 'Password is invalid'
    })
  }

  return res.json({status: true, message: 'User is valid'});
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
  const username = req.params.username;
  res.send(`<b>${username} has been logged out successfully</b>`);
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  console.error(err.message);
  res.status(500).send('Server Error');
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));