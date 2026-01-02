const Activity = require("../models/Activity.js");

const calculateCarbonScore = ({ transport, electricity, waste }) => {
    let score = 0;

    if (transport === "car") score += 5;
    else if (transport === "bus") score += 2;
    else if(transport === "bike" || transport === "walk") score += 0;

    score += electricity * 0.8;

    if (waste === "plastic") score += 4;
    else if (waste === "organic") score += 1;
    else if (waste === "paper") score += 2;

    return Math.round(score);
};

exports.addActivity = async (req, res) => {
    try {
        const { transport, electricity, waste } = req.body;
        const carbonScore = calculateCarbonScore({
            transport,
            electricity,
            waste,
        });

        const activity = await Activity.create({
            transport,
            electricity,
            waste,
            carbonScore,
        });

        res.status(201).json({
            success: true,
            activity,
        });

    } catch (error) {
        res.status(500).json ({
            success: false,
            message: "Failed to add activity",
            error: error.message,
        });        
    }
};

exports.getActivities = async (req, res) => {
    try {
        const activity = await Activity.find().sort({ creatAT: -1 });

        res.status(200).json ({
            success: true,
            activities,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch activities",
            error: error.message,
        });
    }
};