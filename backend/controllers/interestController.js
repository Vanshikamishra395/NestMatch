const pool = require("../db");

const createInterest = async (req, res) => {
  try {
    const { tenant_id, listing_id } = req.body;

    if (!tenant_id || !listing_id) {
      return res.status(400).json({
        success: false,
        message: "Tenant ID and Listing ID are required",
      });
    }

    const [existing] = await pool.query(
      "SELECT id FROM interests WHERE tenant_id = ? AND listing_id = ?",
      [tenant_id, listing_id]
    );

    if (existing.length > 0) {
      return res.status(409).json({
        success: false,
        message: "You have already shown interest in this listing",
      });
    }

    await pool.query(
      "INSERT INTO interests (tenant_id, listing_id) VALUES (?, ?)",
      [tenant_id, listing_id]
    );

    res.status(201).json({
      success: true,
      message: "Interest sent successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to send interest",
    });
  }
};

const getOwnerRequests = async (req, res) => {
  try {
    const { ownerId } = req.params;

    const [requests] = await pool.query(
      `
      SELECT
        interests.id,
        interests.status,
        interests.created_at,
        users.name AS tenant_name,
        users.email AS tenant_email,
        listings.title,
        listings.location,
        listings.rent
      FROM interests
      JOIN users ON interests.tenant_id = users.id
      JOIN listings ON interests.listing_id = listings.id
      WHERE listings.owner_id = ?
      ORDER BY interests.created_at DESC
      `,
      [ownerId]
    );

    res.status(200).json({
      success: true,
      data: requests,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch requests",
    });
  }
};

module.exports = {
  createInterest,
  getOwnerRequests,
};