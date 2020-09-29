// IT18233704 -  N.R Yamasinghe
const mongoose = require("mongoose");

const SessionNotAvailableTimeSchema = new mongoose.Schema({
  primarySession: {
    type: String,
    trim: true,
    required: [true, "lecturer text is required"],
  },
  day: {
    type: String,
    trim: true,
    required: [true, "day text is required"],
  },

  from: {
    type: String,
    trim: true,
    required: [true, "from text is required"],
  },

  to: {
    type: String,
    trim: true,
    required: [true, "to text is required"],
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Session Not Available Time Schema",
  SessionNotAvailableTimeSchema
);
