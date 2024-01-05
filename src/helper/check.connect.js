"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const _SECOND = 5000;

// count connect
const countConnect = () => {
  const numConnection = mongoose.connect.length;
  console.log(`Number count of connect: ${numConnection}`);
  return numConnection;
};

// check overload
const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connect.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // example maximun number of connection based on number of cores
    const maxConnections = numCores * 5;
    console.log(`Active connections: ${numConnection}`);
    console.log(`memory use: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.log(`Connection overload detected!`);
      //notify.send(...)
    }
  }, _SECOND); // monitor every 5 seconds
};

module.exports = {
  countConnect,
  checkOverLoad,
};
