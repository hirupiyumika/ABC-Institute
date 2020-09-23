const mongoose = require("mongoose");

const LecturerRoomsSchema = new mongoose.Schema({
  lecturerID: {
    type: String,
    trim: true,
    required: [true, "lecturer ID is required"],
  },
  lecturer: {
    type: String,
    trim: true,
    required: [true, "lecturer is required"],
  },
  lectureHalls: [{ type: String, trim: true }],
  laboratories: [{ type: String, trim: true }],
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("lecturer_Rooms", LecturerRoomsSchema);
