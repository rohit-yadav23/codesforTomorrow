
const {
    getservices,
    getservice,
    createservice,
    updateservice,
    deleteservice,

} = require("../controller/service.controller");

module.exports = (router) => {

    router.get("/get/service", getservices);
    router.post("/create-service", createservice);
    router.get("/service/:id", getservice);
    router.patch("/update-service/:id", updateservice);
    router.delete("/delete-service/:id", deleteservice);
};