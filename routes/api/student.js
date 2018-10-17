const router = require("express").Router();
const studentController = require("../../controllers/studentController");
const multer = require('multer');
const AWS = require('aws-sdk');

var storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '');
    }
});


var multipleUpload = multer({ storage: storage }).array('file');
var upload = multer({ storage: storage }).single('file');

const BUCKET_NAME = 'studioassist';
const IAM_USER_KEY = process.env.ACCESSKEYID;
const IAM_USER_SECRET = process.env.SECRETACCESSKEY;

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
router.post("/", multipleUpload, (req, res) => {
    const file = req.files;
    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: 'BUCKET_NAME'
    });
    s3bucket.createBucket(function () {
        let Bucket_Path = 'BUCKET_PATH';
        //Where you want to store your file
        var ResponseData = [];

        file.map((item) => {
            var params = {
                Bucket: BucketPath,
                Key: item.originalname,
                Body: item.buffer,
                ACL: 'public-read'
            };

            s3bucket.upload(params, function (err, data) {
                if (err) {
                    res.json({ "error": true, "Message": err });
                } else {
                    ResponseData.push(data);
                    if (ResponseData.length == file.length) {
                        res.json({ "error": false, "Message": "File Uploaded    SuceesFully", Data: ResponseData });
                    }
                }
            });
        });
    });
})

//@route POST api/student/registerClass
//@desc Register a student for a class
//@acess 
router.post("/registerClass", studentController.registerAClass)


router.delete("/:id", studentController.deleteStudent)

module.exports = router;