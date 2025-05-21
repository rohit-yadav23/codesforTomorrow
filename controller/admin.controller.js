const Admin = require("../model/admin.model")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const mongoose = require("mongoose");
const secretKey = process.env.JWT_SECRET;



const Adminlogin = async (req, res) => {

  const { type, userName, password } = req.body;
  console.log(req.body);
  try {
    const admin = await Admin.findOne({ userName });

    if (!admin) {
      return res.status(401).json({ message: 'Authentication failed. Admin not found.' });
    }

    const isMatch = await bcrypt.compare(password, Admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
    }

      const token = jwt.sign({ id: Admin._id, userName: Admin.userName, type: Admin.type }, secretKey, { expiresIn: '1d' });

      res.status(200).json({ token, type, Admin_id: Admin._id, });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error', error });
  }
};


const getAdminlogin = async(req,res)=>{
  try {
    const getAdmin = await Admin.find();
    res.status(200).json({message:"get all Admin"});
  } catch (error) {
     console.log(error);
    res.status(500).json({ message: 'Server error', error });
  }
}

async function createAdmin() {
  try {
    const password = "Admin123!@#";
    var hash = bcrypt.hashSync(password, salt);
    const admin = await Admin.create({
     
      userName: "admin@codesfortomorrow.com",
      password: hash,
    });
    console.log("createAdmin", Admin);
  } catch (error) {
    console.error(error);
  }
}
// createAdmin()
module.exports= {
Adminlogin,
getAdminlogin,
}