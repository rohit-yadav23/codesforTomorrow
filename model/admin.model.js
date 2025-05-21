const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const adminSchema = new Schema({

    Username: {
        type: String,
        required: true,
    },
    Password: {
        type: Number,
       
    },
   
    active: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;