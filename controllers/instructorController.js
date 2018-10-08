const db = require("../models");

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
        db.Instructor.create(req.body, () => {
            console.log("Post route to create instructor hit")
        })
    }

}