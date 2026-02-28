const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const userSchema = new mongoose.Schema({

    name : {
        type: String,
        required : true
    },
    email :   {
         type: String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    status : {
        type : boolean
    },
    created_date : {
        type : Date,
        required : true
    },
    updated_date : {
        type : Date,
        required : true
    }
});

module.exports = mongoose;