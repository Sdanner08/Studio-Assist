const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
    firstName: String,
    lastName: String,
    picture: String, //s3 Bucket url
    classes: [
        {
            type: String,
            ref: "Class"
        }
    ]

});

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;
