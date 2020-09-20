const mongoose = require("mongoose");

const BuildingsSchema = new mongoose.Schema({
  building: {
    type: String,
    trim: true,
    required: [true, "Building is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Buildings", BuildingsSchema);
