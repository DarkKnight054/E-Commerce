require("dotenv").config();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
