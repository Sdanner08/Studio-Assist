const router = require("express").Router();
const studentController = require("../../controllers/studentController");

//@route GET api/student/
//@desc gets all students
//@acess 
router.get("/", studentController.findAll)

router.get("/status/:status", studentController.findAllByStatus)

//@route GET api/student/
//@desc gets one student
//@acess 
router.get("/:id", studentController.findOne)

//@route POST api/student/
//@desc Creates a new student
//@acess 
router.post("/", studentController.create)

//@route POST api/student/registerClass
//@desc Register a student for a class
//@acess 
router.post("/registerClass", studentController.registerAClass)


router.delete("/:id", studentController.deleteStudent)

module.exports = router;