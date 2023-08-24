const express = require("express");
const router = express.Router();

const { getAllVehicles, addVehicle } = require("../controllers/vehicles");
const { getAllUsers, deleteUser } = require('../controllers/users')
const {  register } = require("../controllers/login");




router.route('/').get(getAllVehicles).post(addVehicle)
router.route('/users').get(getAllUsers).delete(deleteUser)
router.route("/register").post(register);

module.exports = router;