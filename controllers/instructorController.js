const db = require("../models");
const bcrypt = require('bcryptjs')

module.exports = {


    //@route GET api/instructor/
    //@desc Tests the posts route
    //@acess 
    findAll(req, res) {
        db.Instructor.find({}, (resp) => {
            res.json(resp)
        })

    },

    //@route POST api/instructor/
    //@desc Create instructor 
    //@acess 
    create(req, res) {
        //check to see if the username give already exists
        db.Instructor.findOne({ username: req.body.username }).then(
            user => {
                if (user) {
                    res.status(400).json({ username: "Username Already Exists" })
                }
                else {
                    const newInstructor = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        username: req.body.username,
                        password: req.body.password,
                        picture: req.body.picture
                    }
                    //Encrypt the passworkd and replace it i the newInstructor object
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newInstructor.password, salt, (err, hash) => {
                            if (err) {
                                res.send(err)
                            }
                            else {
                                newInstructor.password = hash
                                db.Instructor.create(newInstructor, (err, resp) => {
                                    res.status(200).json(resp)
                                })
                            }
                        })
                    })
                }
            }
        )
    }

}