let express = require("express")
let mongoose = require("mongoose")
let employeeModel = require("./models/Employee")

let app = express();

mongoose.connect('mongodb://localhost:27017/Employee')
.then(()=> console.log('connect to MongoDB'))
.catch((err)=>console.error('Could not connect to MongoDB',err));