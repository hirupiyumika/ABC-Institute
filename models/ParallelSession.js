const mongoose = require("mongoose");

const ParallelSessionSchema = new mongoose.Schema({
  number: {
    type: Number,
    trim: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: String,
    trim: true,
  },
  day: {
    type: String,
    trim: true,
  },
  duration: {
    type: Number,
    trim: true,
  },
  room: {
    type: String,
    trim: true,
  },
  sessions: [
    {
      code: {
        type: String,
      },
      created: {
        type: String,
      },
      duration: {
        type: Number,
      },
      group: {
        type: String,
      },
      laboratories: [
        {
          type: String,
        },
      ],
      lecturers: [
        {
          type: String,
        },
      ],
      status: {
        type: Boolean,
      },
      stdCount: {
        type: Number,
      },
      subject: {
        type: String,
      },
      tag: {
        type: String,
      },
      _id: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Parallel Session", ParallelSessionSchema);
