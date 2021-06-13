// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from the controllers folder's index.js.
const { getController } = require("../controllers/index.js");

router.get("/search", getController);

// Exporting controllers to server.js.
module.exports = router;
