const AWS = require('aws-sdk'),
    multer = require('multer'),
    multerS3 = require('multer-s3'),
    S3_BUCKET = "studioassist",
    keys = require('../keys_prod/keys_prod')

var s3 = new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey
});

var upload = multer({
    storage: multerS3({
        s3: s3,
        ACL: "public-read",
        bucket: S3_BUCKET,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
            req.body.file = file.originalname //adds file name to req.body.file name to later store in db 
        },
        key: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
})


module.exports = upload;