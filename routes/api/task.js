const router = require("express").Router();
const taskController = require("../../controllers/taskController");

router.get("/", taskController.findAll)


router.post("/", taskController.create)

router.get("/delete",taskController.delete);


router.delete("/:id", taskController.deleteTask)

module.exports = router;