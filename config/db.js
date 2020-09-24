const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://nithya123:nithya123@cluster0-vcabd.mongodb.net/TimetableManagementSystem?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB connected ");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
