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
  mainGroup: {
    type: String,
    trim: true,
  },
  subGroup: {
    type: String,
    trim: true,
  },
  subject: {
    type: String,
    trim: true,
    required: [true, "Subject is required"],
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
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("primary_Sessions", PrimarySessionsSchema);
