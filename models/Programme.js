// IT18233704 -  N.R Yamasinghe
const mongoose = require("mongoose");

const ProgrammeSchema = new mongoose.Schema({
  programme: {
    type: String,
    trim: true,
    required: [true, "programme text is required"],
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Programme", ProgrammeSchema);
