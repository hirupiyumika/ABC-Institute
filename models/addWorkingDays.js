const mongoose = require("mongoose");

const WorkingDaysSchema = new mongoose.Schema({
  day: {
    type: String,
    trim: true,
    required: [true, "year text is required"],
  },
  startingHours: {
    type: String,
    trim: true,
  },
  endingHours: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("working_days", WorkingDaysSchema);
