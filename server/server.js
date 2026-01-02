const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path"); // 1. Import path

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/activity", require("./routes/activityRoutes"));

// --- NEW SECTION FOR PRODUCTION ---
// 2. Serve static files from the React app
// Using 'dist' because you are using Vite
const clientPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientPath));

// 3. Catch-all: Send any request that doesn't match an API route back to React
app.get("*", (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
});
// ----------------------------------

const { errorHandler } = require("./middleware/errorMiddleware");
app.use(errorHandler);

const PORT = process.env.PORT || 8080; // Azure uses 8080 or provides a PORT
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
