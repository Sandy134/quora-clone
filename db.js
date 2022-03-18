const mongoose = require("mongoose");

const url =
  "mongodb+srv://sandesh132:sand959180@cluster0.tk1tm.mongodb.net/quora-clone?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
