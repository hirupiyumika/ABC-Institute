// IT18233704 -  N.R Yamasinghe
const mongoose = require("mongoose");

const SubGroupNotAvailableTimeSchema = new mongoose.Schema({
  subGroup: {
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
});

module.exports = mongoose.model(
  "Sub Group Not Available Time Schema",
  SubGroupNotAvailableTimeSchema
);
