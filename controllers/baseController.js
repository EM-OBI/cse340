const utilities = require("../utilities/")
const baseController = {}

baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  // req.flash("error", "Flash message.");
  res.render("index", {title: "Home", nav, errors: null,})
}

baseController.throwError = async function(req, res, next){
    const error = new Error("This is an intentional error for testing.");
    error.status = 500;
    next(error);
}

module.exports = baseController