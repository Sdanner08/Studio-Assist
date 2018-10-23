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
    instructor:
    {
        type: String,
        ref: "Instructor"
    },
    attendance: [
        {
            date: String,
            absentStudents: [
                {
                    type: String,
                    ref: "Student"
                }
            ]

        }
    ],
    schedule: [
        {
            type: String
        }
    ],
    time: String
});


const Class = mongoose.model("Class", classSchema);
module.exports = Class;