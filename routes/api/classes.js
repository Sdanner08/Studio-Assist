const router = require("express").Router();
const classController = require("../../controllers/classController");

router.get("/", classController.findAll)

router.post("/", classController.createClass)


router.get("/:id", classController.findOne)

module.exports = router;