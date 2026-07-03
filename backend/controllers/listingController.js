const pool = require("../db");

// Create Listing
const createListing = async (req, res) => {
    try {

        const {
            owner_id,
            title,
            description,
            location,
            rent,
            room_type,
            furnishing,
            available_from,
            preferred_gender,
            amenities
        } = req.body;

        await pool.query(
            `INSERT INTO listings
            (
                owner_id,
                title,
                description,
                location,
                rent,
                room_type,
                furnishing,
                available_from,
                preferred_gender,
                amenities
            )

            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                owner_id,
                title,
                description,
                location,
                rent,
                room_type,
                furnishing,
                available_from,
                preferred_gender,
                JSON.stringify(amenities)
            ]
        );

        res.status(201).json({
            success: true,
            message: "Listing created successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Unable to create listing"
        });

    }
};

// Get All Listings
const getAllListings = async (req, res) => {
    try {

        const [listings] = await pool.query(
            "SELECT * FROM listings WHERE status = 'Available' ORDER BY created_at DESC"
        );

        res.status(200).json({
            success: true,
            data: listings
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Unable to fetch listings"
        });

    }
};
const getListingById = async (req, res) => {
  try {
    const { id } = req.params;

    const [listings] = await pool.query(
      `SELECT 
        listings.*,
        users.name AS owner_name,
        users.email AS owner_email,
        users.role AS owner_role
      FROM listings
      LEFT JOIN users ON listings.owner_id = users.id
      WHERE listings.id = ?`,
      [id]
    );

    if (listings.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    res.status(200).json({
      success: true,
      data: listings[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch listing",
    });
  }
};
module.exports = {
  createListing,
  getAllListings,
  getListingById,
};