const express = require("express");
const router = express.Router();
const { index, admin, about, services } = require("../controllers/indexController");
const validacion = require("../middlewares/admin");

router.get("/", index);
router.get("/about", about);
router.get("/services", services);
router.get("/admin", validacion, admin);

module.exports = router;