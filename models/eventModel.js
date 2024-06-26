const mongoose = require('mongoose'); 

var eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      tickets: {
        type: Number,
        required: true,
        default: 0
      }
});

module.exports = mongoose.model('Event', eventSchema);