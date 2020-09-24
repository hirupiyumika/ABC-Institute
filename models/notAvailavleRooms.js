const mongoose = require("mongoose");

const NoRoomsSchema = new mongoose.Schema({
  room: {
    type: String,
    trim: true,
    required: [true, "Room is required"],
  },
  day: {
    type: String,
    trim: true,
    required: [true, "Day is required"],
  },
  start: {
    type: String,
    trim: true,
    required: [true, "Start Time is required"],
  },
  end: {
    type: String,
    trim: true,
    required: [true, "End Time is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("no_Rooms", NoRoomsSchema);
