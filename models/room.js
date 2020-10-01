const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoomsSchema = new mongoose.Schema({
  roomName: {
    type: String,
    trim: true,
    required: [true, "Room is required"],
  },
  roomType: {
    type: String,
    trim: true,
    required: [true, "Room Type is required"],
  },
  building: {
    type: String,
    trim: true,
    required: [true, "Building is required"],
  },
  // buildingId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Buildings",
  // },
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
