const mongoose = require("mongoose");

const FacultiesSchema = new mongoose.Schema({
  faculty: {
    type: String,
    trim: true,
    required: [true, "Faculty is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Faculties", FacultiesSchema);
