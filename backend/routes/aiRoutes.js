const express = require("express");
const router = express.Router();

const {
  getCompatibilityScore,
} = require("../controllers/aiController");

router.post("/compatibility", getCompatibilityScore);

module.exports = router;