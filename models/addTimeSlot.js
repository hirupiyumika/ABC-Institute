const mongoose = require("mongoose");

const TimeSlotSchema = new mongoose.Schema({
  number: {
    type: String,
    index: { unique: true },
  },
  daysAndSlots: [
    {
      day: {
        type: String,
      },
      time: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("time_slot", TimeSlotSchema);
