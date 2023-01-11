const express = require("express");

const router = express.Router();

// services d'auth
/* const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth"); */

const userControllers = require("./controllers/userControllers");
const vehicleControllers = require("./controllers/vehicleControllers");

// Gestion des Users
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

// Gestion des Vehicles
router.get("/vehicles", vehicleControllers.browse);
router.get("/vehicles/:id", vehicleControllers.read);
router.put("/vehicles/:id", vehicleControllers.edit);
router.post("/vehicles", vehicleControllers.add);
router.delete("/vehicles/:id", vehicleControllers.destroy);

module.exports = router;
