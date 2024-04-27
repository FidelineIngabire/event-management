const express = require("express");
const { newUser } = require("../controller/userController");
const {  authMiddleware } = require("../middlewares/authmiddleware")
const router = express.Router();
router.post("/new-user", newUser);

module.exports = router;
