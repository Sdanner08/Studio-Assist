const router = require("express").Router();
const studentController = require("../../controllers/studentController");
const multer = require('multer');
const path = require('path')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')
const upload = require('../../middleware/s3upload')



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


// var s3 = new AWS.S3({
//     accessKeyId: 'AKIAIW2XXSCLJ7HJNGFQ',
//     secretAccessKey: '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'
// });


// var upload = multer({
//     storage: multerS3({
//         s3: s3,
//         ACL: "public-read",
//         bucket: S3_BUCKET,
//         metadata: function (req, file, cb) {
//             cb(null, { fieldName: file.fieldname });
//             req.body.file = file.originalname //adds file name to req.body.file name to later store in db 
//         },
//         key: function (req, file, cb) {
//             cb(null, file.originalname)
//         }
//     })
// })



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
router.post("/", upload.single('file'), studentController.create)



//@route POST api/student/registerClass
//@desc Register a student for a class
//@acess 
router.post("/registerClass", studentController.registerAClass)


router.delete("/:id", studentController.deleteStudent)

module.exports = router;