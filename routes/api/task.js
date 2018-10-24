const router = require("express").Router();
const taskController = require("../../controllers/taskController");
const passport = require('passport')

router.get("/", passport.authenticate('jwt', { session: false }), taskController.findAll)


router.post("/", passport.authenticate('jwt', { session: false }), taskController.create)

router.get("/delete", passport.authenticate('jwt', { session: false }), taskController.delete);


router.delete("/:id", passport.authenticate('jwt', { session: false }), taskController.deleteTask)

module.exports = router;