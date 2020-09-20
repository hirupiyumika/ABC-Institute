const mongoose = require("mongoose");

const RoomsSchema = new mongoose.Schema({
  roomName: {
    type: String,
    trim: true,
    required: [true, "Room is required"],
  },
  building: {
    type: String,
    trim: true,
    required: [true, "Building is required"],
  },
  capacity: {
    type: Number,
    trim: true,
    min: 0,
    max: 5000,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Rooms", RoomsSchema);
