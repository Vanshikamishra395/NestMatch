const pool = require("../db");
const { generateCompatibilityScore } = require("../services/aiService");

const getCompatibilityScore = async (req, res) => {
  try {
    const { listingId, tenantProfile } = req.body;

    if (!listingId || !tenantProfile) {
      return res.status(400).json({
        success: false,
        message: "Listing ID and tenant profile are required",
      });
    }

    const [listings] = await pool.query(
      "SELECT * FROM listings WHERE id = ?",
      [listingId]
    );

    if (listings.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    const listing = listings[0];

    const aiResult = await generateCompatibilityScore(tenantProfile, listing);

    res.status(200).json({
      success: true,
      data: aiResult,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to generate compatibility score",
    });
  }
};

module.exports = {
  getCompatibilityScore,
};