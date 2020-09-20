const mongoose = require("mongoose");

const SubjectsSchema = new mongoose.Schema({
  subject: {
    type: String,
    trim: true,
    required: [true, "Subject is required"],
  },
  code: {
    type: String,
    trim: true,
    required: [true, "Subject Code is required"],
  },
  year: {
    type: String,
    trim: true,
    required: [true, "Subject Offered Year is required"],
  },
  semester: {
    type: String,
    trim: true,
    required: [true, "Subject Offered Semester is required"],
  },
  lectureHours: {
    type: Number,
    trim: true,
    min: 0,
    max: 5,
  },
  tutorialHours: {
    type: Number,
    trim: true,
    min: 0,
    max: 5,
  },
  labHours: {
    type: String,
    min: 0,
    max: 5,
  },
  evolutionHours: {
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
module.exports = mongoose.model("Subjects", SubjectsSchema);
