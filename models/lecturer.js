const mongoose = require("mongoose");

const LecturersSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Name is required"],
  },
  eid: {
    type: String,
    trim: true,
    required: [true, "ID is required"],
  },
  faculty: {
    type: String,
    trim: true,
    required: [true, "Faculty is required"],
  },
  department: {
    type: String,
    trim: true,
    required: [true, "Department is required"],
  },
  center: {
    type: String,
    trim: true,
    required: [true, "Center is required"],
  },
  building: {
    type: String,
    trim: true,
    required: [true, "Building is required"],
  },
  level: {
    type: String,
    required: [true, "Level is required"],
  },
  rank: {
    type: String,
    trim: true,
    required: [true, "Rank is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Lecturers", LecturersSchema);
