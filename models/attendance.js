const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({

});


const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
