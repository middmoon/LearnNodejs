"use strict";

const { model, Schema } = require("mongoose");

const DOCUMENT_NAME = "ApiKey";
const COLLECTION_NAME = "ApiKeys";

const apiKeySchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    permissions: {
      type: [String],
      required: true,
      enum: ["0000", "1111", "2222"],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

// Export the model
module.exports = model(DOCUMENT_NAME, apiKeySchema);
