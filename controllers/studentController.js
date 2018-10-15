const db = require("../models")

module.exports = {

    //@route GET api/student/
    //@desc find all the students
    //@acess 
    findAll(req, res) {
        db.Student.find({}, (err, resp) => {
            if (err) {
                res.send(err)
            } else {
                res.json(resp)
            }
        })
    },

    //@route GET api/student/:id
    //@desc Returns a specific student along with what classes they are enrolled and the class details
    //@acess 
    findOne(req, res) {
        let studentId = req.params.id
        db.Student.findOne({ _id: studentId }).
            populate('classesEnrolled').
            exec((err, student) => {
                if (err) {
                    res.send(err)
                } else {
                    res.json(student)
                }
            })
    },

    //@route POST api/student/
    //@desc Create a new students 
    //@acess 
    create(req, res) {
        let today = new Date()
        let birthDate = new Date(req.body.birthday)
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
        const student = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            picture: req.body.picture,
            birthday: req.body.birthday,
            age: age,
            parents: [
                {
                    firstName: req.body.parentFirstName,
                    lastName: req.body.parentLastName,
                    phone: req.body.phone
                }
            ]
        }
        db.Student.create(student, (err, student) => {
            if (err) {
                res.send(err)
            } else {
                res.json(student)
            }
        })
    },

    //@route POST api/student/registerClass
    //@desc Add a student to a class, updates both class and student
    //@acess 
    registerAClass(req, res) {
        console.log("Route Hit", req.body)
        let classId = req.body.classId
        let studentId = req.body.studentId

        db.Student.find({ $and: [{ _id: studentId }, { classesEnrolled: classId }] }, (err, resp) => {
            if (!err) {
                if (!resp.length) {
                    db.Student.update({ _id: studentId }, { $push: { classesEnrolled: classId } }, (err, student) => {
                        db.Class.update({ _id: classId }, { $push: { students: studentId }, $inc:{maxCapacity: -1}}, (err, registedClass) => {
                            console.log(err);
                            var response = {
                                student,
                                registedClass
                            }
                            res.json(response)
                        })
                    })
                } else {
                    res.send("Already Registered in that class")
                }
            }
            else {
                res.send(err)
            }

        })
    },

    //@route DELETE api/student/:id
    //@desc Update a student to inactive and unenroll them from all classes they are enrolled in
    //@acess 
    deleteStudent(req, res) {
        let studentId = req.params.id

        db.Student.updateOne({ _id: studentId }, { $set: { active: false } }, (err, resp) => {
            if (err) {
                res.json(err)
            }
        })

        db.Class.updateMany({ students: studentId }, { $pull: { students: studentId } }, (err, resp) => {
            if (err) {
                res.json(err)
            } else {
                res.json(resp)
            }
        })
    }



}