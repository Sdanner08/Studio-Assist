const db = require("../models");

module.exports = {

    //finds all classes 
    findAll(req, res) {
        db.Class.find({}, (err, resp) => {
            res.json(resp)


        })
    },
    //find one class by id
    findOne(req, res) {
        let id = req.params.id
        db.Class.findOne({ _id: id }).populate("Student").exec((err, classes) => {
            res.json(classes)
        })
    },

    //method for Post route to create a class
    createClass(req, res) {
        console.log("POST Route hit")
        db.Class.create(req.body, (err, Class) => {
            console.log(Class)
        })
    }


}