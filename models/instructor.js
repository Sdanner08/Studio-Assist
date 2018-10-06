const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorSchema = new Schema({

});


const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;
