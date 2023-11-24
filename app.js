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

// init db

// init router
app.get("/", (req, res, next) => {
  return res.status(200).json({ message: "hii" });
});

// handling error

module.exports = app;
