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
    delete(req,res)
    {
        db.Task.deleteOne({_id:"5bc7d249e7575536f419a22c"}).then(result=>res.send(200));
    },

    //@route POST api/task/
    //@desc Create a new tasks 
    //@acess 
    create(req, res) {
        const task ={
            title: req.body.title,
            start: req.body.start
        }
        db.Task.create(task, (err, task) => {
            if (err) {
                res.send(err)
            } else {
                res.json(task)
            }
        })
    },
    //@route POST api/task/registerClass
    //@desc Add a task to a class, updates both class and task
    //@acess 
    createTask(req, res) {

    },

    //@route DELETE api/task/:id
    //@desc Update a task to inactive and unenroll them from all classes they are enrolled in
    //@acess 
    deleteTask(req, res) {
        let taskId = req.params.id

        db.Task.updateOne({ _id: taskId }, (err, resp) => {
            if (err) {
                res.json(err)
            }
        })
    }



}