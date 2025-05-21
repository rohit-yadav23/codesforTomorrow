const  MongoClient  = require('mongoose');
const url = 'mongodb+srv://rohityadav5396:Rohit%402000@cluster0.f7x2y22.mongodb.net';

// mongodb+srv://rohityadav5396:<password>@cluster0.f7x2y22.mongodb.net/
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        
        await mongoose.connect(url+"/codes", {
       
                    connectTimeoutMs: 60*1000
        });
        
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
    }
}
module.exports = connectDB;
