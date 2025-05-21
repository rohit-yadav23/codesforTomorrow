const express = require("express");

const router = express.Router();

require("./admin.route")(router);
require("./category.route")(router);
require("./service.route")(router);

module.exports = router;