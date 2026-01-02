const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const {
    addActivity,
    getActivities,
} = require("../controllers/activityController");

router.post("/add", protect, addActivity);
router.get("/", getActivities);

module.exports = router;
