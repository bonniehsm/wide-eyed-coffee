const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
let beans = require("./model");


//set up express server
const app = express();
const PORT = 4000;
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());




//set up routes
const router = express.Router();
app.use("/", router);

//"getData" endpoint
router.route("/getData").get(function(req, res){
    //retrieve all documents from beans collection
    beans.find({}, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});


/** 
 * MongoDB Set up
*/

/*
//set up mongodb
mongoose.connect("mongodb://127.0.0.1:27017/beans", {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function(){
    console.log("Connection with MongoDB was successful");
})
*/

app.listen(PORT, function(){
    console.log("Server is running on Port: " + PORT);
})

module.exports = app;