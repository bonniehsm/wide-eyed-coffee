const express = require("express");
const router = express.Router();

//import beans collection data
let beans = require("../data/beansCollection");

//create a route to get the complete list of beans
router.get("/list", async(req, res) => {
    try {
        res.status(200).json({
            data: beans
        });
    } catch(err) {
        res.status(400).json({
            message: "Error getting data",
            err
        });
    }
});

module.exports = router;