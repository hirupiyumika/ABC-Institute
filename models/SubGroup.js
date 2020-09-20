// IT18233704 -  N.R Yamasinghe
const mongoose = require("mongoose");

const SubGroupSchema = new mongoose.Schema({
  subGroup: {
    type: String,
    trim: true,
    required: [true, "sub group text is required"],
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Sub Group", SubGroupSchema);
