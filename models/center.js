const mongoose = require("mongoose");

const CentersSchema = new mongoose.Schema({
  center: {
    type: String,
    trim: true,
    required: [true, "Center is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Centers", CentersSchema);
