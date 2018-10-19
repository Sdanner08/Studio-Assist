const router = require("express").Router();
const taskController = require("../../controllers/taskController");

//@route GET api/student/
//@desc gets all students
//@acess 
router.get("/", taskController.findAll)

//@route GET api/student/
//@desc gets one student
//@acess 
//router.get("/:id", taskController.findOne)

//@route POST api/student/
//@desc Creates a new student
//@acess 
router.post("/", taskController.create)

router.get("/delete",taskController.delete);

//@route POST api/student/registerClass
//@desc Register a student for a class
//@acess 
//router.post("/registerClass", taskController.registerAClass)


router.delete("/:id", taskController.deleteTask)

module.exports = router;