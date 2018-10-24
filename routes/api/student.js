const router = require("express").Router();
const studentController = require("../../controllers/studentController");
const upload = require('../../middleware/s3upload')
const passport = require('passport')



//Upload to Public folder instead of S3
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './public/')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// });
// var upload = multer({ storage: storage });



//@route GET api/student/
//@desc gets all students
//@acess 
router.get("/",passport.authenticate('jwt', { session: false }), studentController.findAll)

router.get("/status/:status",passport.authenticate('jwt', { session: false }), studentController.findAllByStatus)

//@route GET api/student/
//@desc gets one student
//@acess 
router.get("/:id",passport.authenticate('jwt', { session: false }), studentController.findOne)

//@route POST api/student/
//@desc Creates a new student
//@acess 
router.post("/", passport.authenticate('jwt', { session: false }), upload.single('file'), studentController.create)



//@route POST api/student/registerClass
//@desc Register a student for a class
//@acess 
router.post("/registerClass", passport.authenticate('jwt', { session: false }), studentController.registerAClass)


router.delete("/:id", passport.authenticate('jwt', { session: false }), studentController.deleteStudent)

module.exports = router;