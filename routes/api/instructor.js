const router = require("express").Router();
const instructorController = require("../../controllers/instructorController");


// api/instructor
router.get("/", instructorController.findAll)


// /api/instructor
router.post("/", instructorController.create)

module.exports = router;