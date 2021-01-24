const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
let detail = require("./model");


//set up express server
const app = express();
const PORT = 4000;
app.use(cors());


//set up mongodb
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/beans", {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function(){
    console.log("Connection with MongoDB was successful");
})

app.listen(PORT, function(){
    console.log("Server is running on Port: " + PORT);
})
