const router = require("express").Router();
const classController = require("../../controllers/classController");


//@route GET api/classes/
//@desc Finds all the classes
//@acess 
router.get("/", classController.findAll)

//@route POST api/classes/
//@desc Create a new class
//@acess 
router.post("/", classController.create)

//@route GET api/classes/:id
//@desc Get a specific class by ID
//@acess 
router.get("/:id", classController.findOne)

//@route PUT api/classes/:id/:insId
//@desc Update class to add or change instructor
//@acess 
router.put("/:id/:insId", classController.addOrChangeInstructor)

//@route PUT api/classes/:id/
//@desc Update class details
//@acess 



//@route DELETE api/classes/:id
//@desc DELETE a specific class by ID
//@acess 
router.delete("/:id", classController.deleteClass)



module.exports = router;    