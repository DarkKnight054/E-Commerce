const express = require("express");
const { getAllUser, loginUser, registerUser } = require("../controllers/userController");

const router = express.Router();

router.get("/allUsers", getAllUser);
router.post("/login", loginUser);
router.post('/register', registerUser);
module.exports = router;
