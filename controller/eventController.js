const Event = require("../models/eventModel");
const errorHandler = require("express-async-handler");

const newEvent = errorHandler(async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.json(newEvent);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = { newEvent };
