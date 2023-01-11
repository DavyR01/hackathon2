const express = require("express");

const router = express.Router();

// services d'auth
/* const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth"); */

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
