const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const serviceSchema = new Schema({

CategoryId: { type: Schema.Types.ObjectId, ref: 'Category', default: null },

    Type  : {
        type: String,
        enum: ['Normal', 'VIP'],
        default: '',
    },
    ServiceName: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
       
    },
   
    active: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const Service = mongoose.model('Sevice', serviceSchema);
module.exports = Service;