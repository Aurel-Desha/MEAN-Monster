const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get('/register/:id', authMiddleware, authController.Register);
router.get('/login/:id', authMiddleware, authController.Login);

