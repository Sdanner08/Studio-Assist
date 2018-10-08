const router = require("express").Router();
const classRoutes = require("./classes");
const studentRoutes = require('./student')
const instructorRoutes = require('./instructor')



router.use("/class", classRoutes);
router.use("/student", studentRoutes);
router.use("/instructor", instructorRoutes)

module.exports = router;
