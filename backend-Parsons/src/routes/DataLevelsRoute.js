const express = require("express");
const DataLevels = require("../models/DataLevelsScheme");
const router = express.Router();

router.post ("/Level", async (req, res) => {
    const { user_id,name, level, timeTaken, errorsCount, completedAt } = req.body;
    console.log(req.body);
    const newDataLevel = new DataLevels({ user_id,name, level, timeTaken, errorsCount, completedAt });
    await newDataLevel.save();
    console.log(newDataLevel);
    res.json({ message: "Data level saved" });
});

router.get("/Level", async (req, res) => {
    const dataLevels = await DataLevels.find();
    res.json(dataLevels);
});

module.exports = router;