const listingRoutes = require("./routes/listingRoutes");
const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);

app.get("/", async (req, res) => {
    try {
        await pool.query("SELECT 1");
        res.send("NestMatch Backend Running and MySQL Connected ✅");
    } catch (error) {
        console.error(error);
        res.status(500).send("Database connection failed ❌");
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});