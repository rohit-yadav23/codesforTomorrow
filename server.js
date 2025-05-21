const express = require("express");
// const dotenv = require("dotenv").config();

const connectDB = require("./db")
var cors = require('cors')
var app = express();

connectDB();

app.use(cors({origin:"*",}))
app.get("", (req, res) => {
    res.send('Wallcome');
});

app.use(express.json());


app.use(express.urlencoded({extended:true}));


app.use("", express.static("./uploads"));
app.use("/api",require("./route/index"));

const port = process.env.PORT || 9001;
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
