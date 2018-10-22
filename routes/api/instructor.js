const router = require("express").Router();
const instructorController = require("../../controllers/instructorController");
const passport = require('passport')
const upload = require('../../middleware/s3upload')


//@route GET api/instructor/
//@desc gets all instructors
//@acess 
router.get("/", instructorController.findAll)

//@route GET api/instructor/current
//@desc Return current user
//@private
router.get("/current", passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json(
        "It worked"
    )
})

//@route GET api/instructor/
//@desc gets an instructor by ID
//@acess 
router.get("/:id", instructorController.findOne)

//@route POST api/instructor/
//@desc Creates a new instructor
//@acess 
router.post("/", upload.single('file'), instructorController.create)

//@route POST api/instructor/login
//@desc Login instructor/return JWT Token
//@acess 
router.post("/login", instructorController.login)

router.delete("/:id", instructorController.deleteInstructor)



module.exports = router;