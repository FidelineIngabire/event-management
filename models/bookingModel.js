const mongoose = require('mongoose'); 

var bookingSchema = new mongoose.Schema({
    eventId:{
        type:mongoose.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    numberOfTicket: {
        type: Number,
        required: true
      }
});

module.exports = mongoose.model('Booking', bookingSchema);