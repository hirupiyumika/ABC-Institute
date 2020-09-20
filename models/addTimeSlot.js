const mongoose = require("mongoose");

const TimeSlotSchema = new mongoose.Schema({
  slot: {
    type: String,
    trim: true,
    required: [true, "Time slot is required"],
  },
});

module.exports = mongoose.model("time_slot", TimeSlotSchema);
