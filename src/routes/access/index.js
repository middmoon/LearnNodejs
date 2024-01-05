"use strict";
const express = require("express");
const accressController = require("../../controller/access.controller");
const { asyncHandler } = require("../../auth/checkAuth");
const router = express.Router();

//

//sign up
router.post("/shop/signup", asyncHandler(accressController.signUp));
router.post("/shop/login", asyncHandler(accressController.login));

module.exports = router;
