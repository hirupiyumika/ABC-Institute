// IT18233704 -  N.R Yamasinghe
const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  group: {
    type: String,
    trim: true,
    required: [true, "group text is required"],
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Group", GroupSchema);
