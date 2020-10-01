const mongoose = require("mongoose");

const NotOverlappingSessionSchema = new mongoose.Schema({
  number: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
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

module.exports = mongoose.model(
  "Not Overlapping Session",
  NotOverlappingSessionSchema
);
