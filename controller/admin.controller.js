const Admin = require("../model/admin.model")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const secretKey = process.env.JWT_SECRET;



const Adminlogin = async (req, res) => {

  const { UserName, Password } = req.body;
  console.log(req.body);
  try {
    const admin = await Admin.findOne({ UserName });

    if (!admin) {
      return res.status(401).json({ message: 'Authentication failed. Admin not found.' });
    }

    const isMatch = await bcrypt.compare(Password, Admin.Password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Authentication failed. Wrong Password.' });
    }

      const token = jwt.sign({ id: Admin._id, UserName: Admin.UserName, }, secretKey, { expiresIn: '1d' });

      res.status(200).json({ token, Admin_id: Admin._id, });

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
    const Password = "Admin123!@#";
    var hash = bcrypt.hashSync(Password, salt);
    const admin = await Admin.create({
     
      UserName: "admin@codesfortomorrow.com",
      Password: hash,
    });
    console.log("createAdmin", admin);
  } catch (error) {
    console.error(error);
  }
}
// createAdmin()
module.exports= {
Adminlogin,
getAdminlogin,
}