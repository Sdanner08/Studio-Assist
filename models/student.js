const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: String,
    lastName: String,
    picture: String, //S3 Bucket image url
    birthday: Date,
    age: Number,
    parents: [
        {
            firstName: String,
            lastName: String,
            phone: String
        }
    ],
    classesEnrolled: [
        {
            type: String,
            ref: "Class"
        }
    ],
    active: {
        type: Boolean,
        default: true
    }
});


const Student = mongoose.model("Student", studentSchema);
module.exports = Student;