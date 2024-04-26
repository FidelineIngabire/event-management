const Event = require("../models/eventModel");
const asyncHandler = require("express-async-handler");

const createEvent = asyncHandler(async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.json(newEvent);
  } catch (error) {
    throw new Error(error);
  }
});

const updateEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const updateEvent = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateEvent);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteEvent = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleteEvent = await Event.findByIdAndDelete(id);
      res.json(deleteEvent);
    } catch (error) {
      throw new Error(error);
    }
  })

module.exports = { createEvent, updateEvent, deleteEvent };
