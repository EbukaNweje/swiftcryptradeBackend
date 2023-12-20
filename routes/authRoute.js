const express = require("express")
const register = require("../controllers/auth");
const admin = require("../controllers/Admin");
const { check } = require('express-validator');

const Routers = express.Router()

Routers.route("/register").post([
    check('email', 'Please include a valid email').isEmail(),
  ],register.register)
  Routers.route("/adminregister").post(admin.register)
  Routers.route("/adminlogin").post(admin.login)
Routers.route("/login").post(register.login)
Routers.route("/restLink/:id/:token").post(register.restLink).get(register.getrestlink)
Routers.route("/verifyotp/:id").post(register.verifySuccessful)
Routers.route("/resetotp/:id").post(register.resendotp)
Routers.route("/forgotpassword").post(register.forgotPassword)

module.exports = Routers
