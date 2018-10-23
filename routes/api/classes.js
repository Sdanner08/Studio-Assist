const router = require("express").Router();
const classController = require("../../controllers/classController");
const passport = require('passport')


//@route GET api/classes/
//@desc Finds all the classes
//@acess 
router.get("/", passport.authenticate('jwt', { session: false }), classController.findAll)

//@route POST api/classes/
//@desc Create a new class
//@acess 
router.post("/", passport.authenticate('jwt', { session: false }), classController.create)

//@route GET api/classes/:id
//@desc Get a specific class by ID
//@acess 
router.get("/:id", passport.authenticate('jwt', { session: false }), classController.findOne)

//@route GET api/classes/:id/:age
//@desc Get a specific class by ID and age
//@acess 
router.get("/:id/:age", passport.authenticate('jwt', { session: false }), classController.findByAgeAndEnrollment)

//@route PUT api/classes/:id/:insId
//@desc Update class to add or change instructor
//@acess 
router.put("/:id/:insId", passport.authenticate('jwt', { session: false }), classController.addOrChangeInstructor)

//@route PUT api/classes/:id/
//@desc Update class details
//@acess 

//@route DELETE api/classes/:id
//@desc DELETE a specific class by ID
//@acess 
router.delete("/:id", passport.authenticate('jwt', { session: false }), classController.deleteClass)

router.post("/attendance/:id", passport.authenticate('jwt', { session: false }), classController.submitAttendance)

module.exports = router;    