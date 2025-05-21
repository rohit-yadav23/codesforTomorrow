const {verifyToken} = require("../middleware/auth")
const {
    getcategorys,
    getcategory,
    createcategory,
    updatecategory,
    deletecategory,

} = require("../controller/category.controller");

module.exports = (router) => {

    router.get("/get/category", getcategorys);
    router.post("/create-category", createcategory);
    router.get("/category/:id", getcategory);
    router.patch("/update-category/:id",verifyToken, updatecategory);
    router.delete("/delete-category/:id",verifyToken, deletecategory);
};