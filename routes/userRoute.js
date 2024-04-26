const express = require("express");
const { createUser,loginUser,updateUser,deleteUser } = require("../controller/userController");
const { isUser, authMiddleware } = require("../middlewares/authmiddleware")
const router = express.Router();
router.post("/register", createUser);
router.post("/login",loginUser);
router.delete("/:id", deleteUser)
router.put("/:id",authMiddleware, updateUser)


module.exports = router;
