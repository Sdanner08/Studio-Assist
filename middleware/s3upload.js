const aws = require('aws-sdk'),
    multer = require('multer'),
    multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: process.env.SECRETACCESSKEY,
    accessKeyId: process.env.ACCESSKEYID,
    region: 'us-east-1'
});

s3 = new aws.S3({ accessKeyId: process.env.ACCESSKEYID, accessKeyId: process.env.ACCESSKEYID });

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'studioassist',
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});

module.exports = upload;