// IT18233704 -  N.R Yamasinghe
const mongoose = require("mongoose");

const AcademicYearAndSemesterSchema = new mongoose.Schema({
  year: {
    type: String,
    trim: true,
    required: [true, "year text is required"],
  },
  semester: {
    type: String,
    trim: true,
    required: [true, "semester text is required"],
  },

  yearAndSemester: {
    type: String,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Academic Year And Semesters",
  AcademicYearAndSemesterSchema
);
