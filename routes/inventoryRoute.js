// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities/")
const regValidate = require("../utilities/inventory-validation")

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

//Route to build detail view
router.get("/detail/:invId", utilities.handleErrors(invController.buildByInvId));

//Route to add new classification and inventory item
router.get("/", utilities.handleErrors(invController.buildManagementPage));

//Route to add new classification
router.get("/add-classification", utilities.handleErrors(invController.deliverAddClassification));

//Post new classification data
router.post(
    "/add-classification",
    regValidate.classificationRules(),
    regValidate.checkClassificationData,
    utilities.handleErrors(invController.addNewClassification)
);

// Route to add new inventory
router.get("/add-inventory", utilities.handleErrors(invController.deliverAddInventory));

//Post new inventory data
router.post(
    "/add-inventory",
    regValidate.inventoryRules(),
    regValidate.checkInventoryData,
    utilities.handleErrors(invController.addNewInventory),
);

module.exports = router;