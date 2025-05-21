const {verifyToken} = require("../middleware/auth")

const 
{
Adminlogin,
getAdminlogin,
}= require("../controller/admin.controller");
module.exports = (router) => {

    router.get("/get/admin",getAdminlogin);
    router.post("/login-admin",Adminlogin); 

};
