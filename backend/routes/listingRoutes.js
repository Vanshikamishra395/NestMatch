const express = require("express");

const router = express.Router();

const {
    createListing,
    getAllListings,
    getListingById
} = require("../controllers/listingController");

// Create a new listing
router.post("/", createListing);

// Get all listings
router.get("/", getAllListings);

// Get a single listing by ID
router.get("/:id", getListingById);

module.exports = router;