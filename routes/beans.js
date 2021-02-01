const express = require("express");
const router = express.Router();

//import beans collection data
let beans = require("../data/beansCollection");

//route to get the complete list of beans
router.get("/list", async(req, res) => {
    try {
        res.status(200).json({
            data: beans
        });
    } catch(err) {
        res.status(400).json({
            message: "Error getting beans collection data",
            err
        });
    }
});

//route to get bean by id in request parameter
router.get("/:id", async(req, res) => {
    let {id} = req.params;
    //convert parameter id string to number
    id = Number(id);
    try {
        let bean = beans.find(bean => bean._id === id);
        res.status(200).json({
            data: bean
        });
    } catch(err) {
        res.status(400).json({
            message: "Error getting bean data",
            err
        })
    }

});

module.exports = router;