const mongoose = require("mongoose");

const SubjectRoomsSchema = new mongoose.Schema({
  subjectID: {
    type: String,
    trim: true,
    required: [true, "Subject ID is required"],
  },
  subject: {
    type: String,
    trim: true,
    required: [true, "Subject is required"],
  },
  tag: {
    type: String,
    trim: true,
    required: [true, "Tag is required"],
  },
  lectureHalls: [{ type: String, trim: true }],
  laboratories: [{ type: String, trim: true }],

  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("subject_Rooms", SubjectRoomsSchema);
