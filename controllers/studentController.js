const db = require("../models");

module.exports = {

    //@route GET api/instructor/
    //@desc Tests the posts route
    //@acess 
    findAll(req, res) {
        db.Student.find({}, (resp) => {
            res.json(resp)
        })
    },

    //@route GET api/student/
    //@desc Tests the posts route
    //@acess 
    create(req, res) {
        const student = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            picture: req.body.picture,
        }

        db.Student.create(student, (err, student) => {
            res.json(student)
        })
    }



}