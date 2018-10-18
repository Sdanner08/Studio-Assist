const db = require("../models")

module.exports = {

    //@route GET api/tasks/
    //@desc find all the tasks
    //@acess 
    findAll(req, res) {
        db.Task.find({}, (err, resp) => {
            if (err) {
                res.send(err)
            } else {
                res.json(resp)
            }
        })
    },

    //@route GET api/task/:id
    //@desc Returns a specific student along with what classes they are enrolled and the class details
    //@acess 
    findOne(req, res) {
        let taskId = req.params.id
        db.Task.findOne({ _id: taskId }).
            exec((err, task) => {
                if (err) {
                    res.send(err)
                } else {
                    res.json(task)
                }
            })
    },

    //@route POST api/task/
    //@desc Create a new tasks 
    //@acess 
    create(req, res) {
        let timeOfTask = new Date(req.body.timeOfTask)

        db.Task.create(task, (err, task) => {
            if (err) {
                res.send(err)
            } else {
                res.json(task)
            }
        })
    },

    //@route POST api/student/registerClass
    //@desc Add a student to a class, updates both class and student
    //@acess 
    createTask(req, res) {
        let taskId = req.body.taskId
        

        db.Student.find({ $and: [{ _id: studentId }, { classesEnrolled: classId }] }, (err, resp) => {
            if (!err) {
                if (!resp.length) {
                    db.Student.update({ _id: studentId }, { $push: { classesEnrolled: classId } }, (err, student) => {
                        db.Class.update({ _id: classId }, { $push: { students: studentId } }, (err, registedClass) => {
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