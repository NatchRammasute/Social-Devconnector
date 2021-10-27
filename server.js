//request all the library needed for the project 
const express = require("express");
const connectDB = require('./config/db')
const app = express();


//Connect to Database 
connectDB();


// respond back to the page 
app.get('/', (req,res) => res.send('API Running'))


// listen to port 3000 
app.listen(process.env.PORT || 3000, () =>{
    console.log("server start on port 3000")
})