// IT18233704 -  N.R Yamasinghe
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  academicYearAndSemester: {
    type: String,
    trim: true,
    required: [true, "academic year and semester text is required"],
  },
  programme: {
    type: String,
    trim: true,
    required: [true, "programme text is required"],
  },
  mainGroup: {
    type: String,
    trim: true,
    required: [true, "main group text is required"],
  },
  mainGroupID: {
    type: String,
    trim: true,
    required: [true, "main group id text is required"],
  },
  subGroup: {
    type: String,
    trim: true,
    required: [true, "sub group text is required"],
  },
  subGroupID: {
    type: String,
    trim: true,
    required: [true, "sub group id text is required"],
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
