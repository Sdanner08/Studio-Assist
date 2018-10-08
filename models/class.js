const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
    nameOfClass: String,
    maxCapacity: Number,
    room: String,
    ageGroup: String,
    cost: Number,
    students: [
        {
            type: String,
            ref: "Student"
        }
    ],
    instructor: {
        type: String,
        ref: "Instructor"
    },
    schedule: String //may change to different type
});


const Class = mongoose.model("Class", classSchema);
module.exports = Class;
