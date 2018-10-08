const router = require("express").Router();
const studentController = require("../../controllers/studentController");

router.get("/", studentController.findAll)

router.post("/", studentController.create)

module.exports = router;