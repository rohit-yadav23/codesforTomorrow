const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const categorySchema = new Schema({
    
      Categoryname: {
        type: String,
       
    },
    
    active: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const Service = mongoose.model('Category', categorySchema);
module.exports = Service;