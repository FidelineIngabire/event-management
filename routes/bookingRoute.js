const express = require("express");
const router = express.Router();
const {
  createBooking,
  getUserBookings,
  updatingBookings,
  cancelingBookings,
} = require("../controller/bookingController");
const{authMiddleware,isUser} = require('../middlewares/authmiddleware')
router.post("/",authMiddleware,isUser, createBooking);
router.get("/:eventId", authMiddleware,isUser, getUserBookings);
router.put("/:bookingId", authMiddleware, isUser,updatingBookings);
router.delete("/:bookingId", authMiddleware,isUser,cancelingBookings);

module.exports = router;
