const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema(
    {
        transport: {
            type: String,
            enum: ["car", "bus", "bike", "walk/bike"],
            required: true,
        },

        electricity: {
            type: Number,
            required: true,
            min: 0,
        },

        waste: {
            type: String,
            enum: ["plastic", "organic", "paper"],
            required: true,
        },

        carbonScore: {
            type: Number,
            required: true,
        },
    },

    {
        timestamp: true,
    }
);

module.exports = mongoose.model("Activity", ActivitySchema);