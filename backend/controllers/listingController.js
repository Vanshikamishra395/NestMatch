const pool = require("../db");

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

module.exports = {
    createListing
};