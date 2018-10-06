const router = require("express").Router();
const classRoutes = require("./classes");
const attendance = require("./attendance");


// Book routes
router.use("/class", classRoutes);


module.exports = router;
