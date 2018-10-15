const router = require("express").Router();
const classRoutes = require("./classes");
const studentRoutes = require('./student')
const instructorRoutes = require('./instructor')



router.use("/classes", classRoutes);
router.use("/students", studentRoutes);
router.use("/instructors", instructorRoutes)

module.exports = router;
