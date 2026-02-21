const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authentication = require("../middlewares/authentication");

// routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

// protected route example
router.get("/me", authentication, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;
