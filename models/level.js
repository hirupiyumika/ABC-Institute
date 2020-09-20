const mongoose = require("mongoose");

const LevelsSchema = new mongoose.Schema({
  category: {
    type: String,
    trim: true,
    required: [true, "Category is required"],
  },
  level: {
    type: String,
    trim: true,
    required: [true, "Level is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Levels", LevelsSchema);
