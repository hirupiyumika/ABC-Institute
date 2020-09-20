const mongoose = require("mongoose");

const DepartmentsSchema = new mongoose.Schema({
  department: {
    type: String,
    trim: true,
    required: [true, "Department is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Departments", DepartmentsSchema);
