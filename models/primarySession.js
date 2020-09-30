const mongoose = require("mongoose");

const PrimarySessionsSchema = new mongoose.Schema({
  lecturers: [
    {
      type: String,
      required: [true, "Lecturers is required"],
      trim: true,
    },
  ],

  tag: {
    type: String,
    trim: true,
    required: [true, "Tag Code is required"],
  },
  group: {
    type: String,
    trim: true,
  },
  subject: {
    type: String,
    trim: true,
    required: [true, "Subject is required"],
  },
  code: {
    type: String,
    trim: true,
    required: [true, "Code is required"],
  },
  stdCount: {
    type: Number,
    trim: true,
    min: 0,
    max: 5000,
  },
  duration: {
    type: Number,
    trim: true,
    min: 0,
    max: 5,
  },
  lectureHalls: [{ type: String, trim: true }],
  laboratories: [{ type: String, trim: true }],
  status: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("primary_Sessions", PrimarySessionsSchema);
