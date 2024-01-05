"use strict";

const mongoose = require("mongoose");
const {
  db: { host, name, port },
} = require("../configs/config.mongodb");

const connectString = `mongodb://${host}:${port}/${name}`;
const { countConnect } = require("../helper/check.connect");

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    // dev
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    // connect
    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then((_) => {
        console.log(connectString);
        console.log(`Connected Mongodb PRO:`, countConnect());
      })
      .catch((err) => {
        console.log(`Erro ${err}`);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
