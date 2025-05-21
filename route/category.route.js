
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
    router.patch("/update-category/:id", updatecategory);
    router.delete("/delete-category/:id", deletecategory);
};