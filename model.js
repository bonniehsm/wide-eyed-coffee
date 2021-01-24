const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bean = new Schema({
    name: {
        type: String
    },
    size: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    country: {
        type: String
    }
})

module.exports = mongoose.model("bean", bean);