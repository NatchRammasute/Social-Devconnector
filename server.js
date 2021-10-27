const express = require("express");

const app = express();

app.get('/', (req,res) => res.send('API Running'))


app.listen(process.env.PORT || 3000, () =>{
    console.log("server start on port 3000")
})