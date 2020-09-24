const mongoose = require("mongoose");

const TagRoomsSchema = new mongoose.Schema({
  tagID: {
    type: String,
    trim: true,
    required: [true, "tag text is required"],
  },
  tagName: {
    type: String,
    trim: true,
    required: [true, "tag text is required"],
  },
  lectureHalls: [{ type: String, trim: true }],
  laboratories: [{ type: String, trim: true }],
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("tag_Rooms", TagRoomsSchema);
