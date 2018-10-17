const db = require("../models");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

module.exports = {


    //@route GET api/instructor/
    //@desc find all instructors
    findAll(req, res) {
        db.Instructor.find({}, (err, resp) => {
            res.json(resp)
        })

    },


    //@route GET api/instructor/
    //@desc Find One Instructor by ID
    //@acess 
    findOne(req, res) {
        db.Instructor.findOne({ _id: req.params.id })
            .populate("classes")
            .exec((err, resp) => {
                res.json(resp)
            })
    },

    //@route POST api/instructor/login
    //@desc Login instructor/return JWT Token
    //@acess 
    login(req, res) {
        const username = req.body.username
        const password = req.body.password

        db.Instructor.findOne({ username })
            .then(
                instructor => {
                    if (!instructor) {
                        res.status(404).json({ Username: "Username not found" })
                    }

                    //Check Password
                    bcrypt.compare(password, instructor.password)
                        .then(isMatch => {
                            if (isMatch) {

                                const payload = { id: instructor.id, name: `${instructor.firstName} ${instructor.lastName}` }
                                //user matched, sign tokeb
                                jwt.sign(
                                    payload,
                                    process.env.SECRETORKEY,
                                    { expiresIn: 3600 },
                                    (err, token) => {
                                        res.json({
                                            sucess: true,
                                            token: 'Bearer ' + token
                                        })

                                    })
                            }
                            else {
                                return res.status(400).json({ password: "Password incorrect" })
                            }
                        })

                }
            )
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