//Needed resource
const express = require("express");
const router = new express.Router();
const accountController = require("../controllers/accountController")
const utilities = require("../utilities");
const regValidate = require("../utilities/account-validation")

//Route to request login view through accController
router.get("/login", utilities.handleErrors(accountController.buildLogin));

//Route to registration view
router.get("/register", utilities.handleErrors(accountController.buildRegistration))

//Route to submit registration form
router.post("/register",
    regValidate.registrationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(accountController.registerAccount))

//export router module
module.exports = router;