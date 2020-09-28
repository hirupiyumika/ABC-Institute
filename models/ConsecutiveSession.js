const mongoose = require("mongoose");

const ConsecutiveSessionSchema = new mongoose.Schema({
  lecturers1: [
    {
      type: String,

      trim: true,
    },
  ],

  tag1: {
    type: String,
    trim: true,
  },

  group1: {
    type: String,
    trim: true,
  },
  subject1: {
    type: String,
    trim: true,
  },
  stdCount1: {
    type: Number,
    trim: true,
    min: 0,
    max: 5000,
  },
  duration1: {
    type: Number,
    trim: true,
    min: 0,
    max: 5,
  },
  created: {
    type: Date,
    default: Date.now,
  },

  lecturers2: [
    {
      type: String,

      trim: true,
    },
  ],

  tag2: {
    type: String,
    trim: true,
  },

  group2: {
    type: String,
    trim: true,
  },
  subject2: {
    type: String,
    trim: true,
  },
  stdCount2: {
    type: Number,
    trim: true,
    min: 0,
    max: 5000,
  },
  duration2: {
    type: Number,
    trim: true,
    min: 0,
    max: 5,
  },
  created: {
    type: Date,
    default: Date.now,
  },

  lecturers3: [
    {
      type: String,

      trim: true,
    },
  ],

  tag3: {
    type: String,
    trim: true,
  },

  group3: {
    type: String,
    trim: true,
  },
  subject3: {
    type: String,
    trim: true,
  },
  stdCount3: {
    type: Number,
    trim: true,
    min: 0,
    max: 5000,
  },
  duration3: {
    type: Number,
    trim: true,
    min: 0,
    max: 5,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Consecutive Session",
  ConsecutiveSessionSchema
);
