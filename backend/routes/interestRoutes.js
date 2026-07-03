const express = require("express");
const router = express.Router();

const {
  createInterest,
  getOwnerRequests,
} = require("../controllers/interestController");

router.post("/", createInterest);
router.get("/requests/:ownerId", getOwnerRequests);

module.exports = router;