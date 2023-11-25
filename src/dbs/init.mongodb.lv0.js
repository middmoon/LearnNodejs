const mongoose = require("mongoose");

const connectString = "mongodb://localhost:27017/shopDEV";

mongoose
  .connect(connectString)
  .then((_) => {
    console.log(`Connected Mongodb`);
  })
  .catch((err) => {
    console.log(`Erro ${err}`);
  });

module.exports = mongoose;
