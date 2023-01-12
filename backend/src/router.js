const express = require("express");

const router = express.Router();

// services d'auth
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const vehicleControllers = require("./controllers/vehicleControllers");

// Auth
router.post("/api/register", hashPassword, userControllers.add);
router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Gestion des Users
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", hashPassword, userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete("/users/:id", verifyToken, userControllers.destroy);

// Gestion des Vehicles
router.get("/vehicles", vehicleControllers.browse);
router.get("/vehicles/:id", vehicleControllers.read);
router.put("/vehicles/:id", verifyToken, vehicleControllers.edit);
router.post("/vehicles", vehicleControllers.add);
router.delete("/vehicles/:id", verifyToken, vehicleControllers.destroy);

module.exports = router;
