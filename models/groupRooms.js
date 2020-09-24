const mongoose = require("mongoose");

const GroupRoomsSchema = new mongoose.Schema({
  group: {
    type: String,
    trim: true,
    required: [true, "group is required"],
  },
  lectureHalls: [{ type: String, trim: true }],
  laboratories: [{ type: String, trim: true }],
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("group_Rooms", GroupRoomsSchema);
