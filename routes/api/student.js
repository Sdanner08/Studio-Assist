const router = require("express").Router();
const studentController = require("../../controllers/studentController");
const multer = require('multer');
const path = require('path')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
var upload = multer({ storage: storage });


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
router.post("/", upload.single('file'), (req, res) => {
    console.log("test")
    console.log(req.file)
})



//@route POST api/student/registerClass
//@desc Register a student for a class
//@acess 
router.post("/registerClass", studentController.registerAClass)


router.delete("/:id", studentController.deleteStudent)

module.exports = router;