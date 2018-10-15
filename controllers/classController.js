const db = require("../models");

module.exports = {
    //@route GET api/classes/
    //@desc find all the classes
    //@acess 
    findAll(req, res) {
        db.Class.find({}, (err, resp) => {
            res.json(resp)
        })
    },

    //@route GET api/classes/:id
    //@desc find one class by id
    //@acess 
    findOne(req, res) {
        let id = req.params.id
        db.Class.findOne({ _id: id })
            .populate({ path: "instructor", select: "firstName lastName" })
            .populate("students")
            .exec((err, classes) => {
                res.json(classes)
            })
    },

    //@route POST api/classes/
    //@desc Create a new class
    //@acess 
    create(req, res) {
        console.log(req.body)
        const Class = {
            nameOfClass: req.body.nameOfClass,
            maxCapacity: req.body.maxCapacity,
            room: req.body.room,
            ageGroup: req.body.ageGroup,
            cost: req.body.cost,
        }
        if (req.body.instructor !== "") {
            Class.instructor = req.body.instructor
        }

        db.Class.create(Class, (err, Class) => {
            console.log(Class)
            db.Instructor.updateOne({ _id: Class.instructor }, { $push: { classes: Class.id } }).then(updated => {
                res.json({ Class, updated })
            })
        })
    },

    //@route PUT api/classes/instructor
    //@desc Update class to add or change instructor
    //@acess 
    addOrChangeInstructor(req, res) {
        let classId = req.params.classId
        let instructorId = req.params.instructorId
        db.Class.updateOne({ _id: classId }, { $set: { instructor: instructorId } }, (err, Class) => {
            db.Instructor.updateOne({ classes: classId }, { $pull: { classes: classId } }, (err, Instructor) => {
                let response = {
                    Class,
                    Instructor
                }
                res.json(response)
            })
        })
    },

    //@route DELETE api/classes/:id
    //@desc Delete a class by id and unenroll the students who are enrolles in it
    //@acess 
    deleteClass(req, res) {
        let id = req.params.id
        db.Class.deleteOne({ _id: id }, (err, classResp) => {
            db.Student.updateMany({ classesEnrolled: id }, { $pull: { classesEnrolled: id } }, (err, studentResp) => {
                let response = {
                    classResp,
                    studentResp
                }
                res.json(response)
            })
        })
    }

}