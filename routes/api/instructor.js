const router = require("express").Router();
const instructorController = require("../../controllers/instructorController");


//@route GET api/instructor/
//@desc gets all instructors
//@acess 
router.get("/", instructorController.findAll)

router.get("/:id", instructorController.findOne)


// /api/instructor

//@route POST api/instructor/
//@desc Creates a new instructor
//@acess 
router.post("/", instructorController.create)

module.exports = router;