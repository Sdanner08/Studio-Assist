const router = require("express").Router();
const classRoutes = require("./classes");
const studentRoutes = require('./student')
const instructorRoutes = require('./instructor')
const taskRoutes = require("./task");



router.use("/classes", classRoutes);
router.use("/students", studentRoutes);
router.use("/instructors", instructorRoutes)
router.use("/tasks", taskRoutes);

module.exports = router;
