require("dotenv").config();
const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

// init midleware
// // morgan: thu vien in ra block khi nguoi dung chay request - production: combine
app.use(morgan("dev"));
// // helmet: ngăn chặn trả về các header, package khi có request
app.use(helmet());
// // compress: nén dữ liệu tối ưu băng thông
app.use(compression());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// init db
require("./dbs/init.mongodb");
// const { checkOverLoad } = require("./helper/check.connect");
// checkOverLoad();

// init router
app.use("/", require("./routes"));

// handling error
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    message: error.message || "Internal Error",
  });
});

module.exports = app;
