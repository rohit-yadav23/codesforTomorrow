const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const adminSchema = new Schema({

    UserName: {
        type: String,
      
    },
    Password: {
        type:String,
       
    },
   
    active: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;