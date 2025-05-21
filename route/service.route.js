const {verifyToken} = require("../middleware/auth")
const {
    getservices,
    getservice,
    createservice,
    updateservice,
    deleteservice,

} = require("../controller/service.controller");

module.exports = (router) => {

    router.get("/get/service", getservices);
    router.post("/create-service", verifyToken,createservice);
    router.get("/service/:id", getservice);
    router.patch("/update-service/:id",verifyToken, updateservice);
    router.delete("/delete-service/:id",verifyToken, deleteservice);
};