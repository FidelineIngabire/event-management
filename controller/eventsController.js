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

const editEvent = errorHandler(async (req, res) => {
    const { id } = req.params;
  
    try {
      const editEvent = await Event.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(editEventEvent);
    } catch (error) {
      throw new Error(error);
    }
  });
module.exports = { newEvent,editEvent };
