import axios from "axios";

export default {
  // Gets all classes
  getClasses: function () {
    return axios.get("/api/classes")
  },
  // Gets the class with the given id
  getClass: function (id) {
    return axios.get("/api/classes/" + id);
  },
  // Deletes the class with the given id
  deleteClass: function (id) {
    return axios.delete("/api/classes/" + id)
  },
  // Saves a class to the database
  saveClass: function (classData) {
    return axios.post("/api/classes", classData);
  },
  // Gets all students
  getStudents: function () {
    return axios.get("/api/students")
  },
  // Gets the student with the given id
  getStudent: function (id) {
    return axios.get("/api/students/" + id);
  },
  // Deletes the student with the given id
  deleteStudent: function (id) {
    return axios.delete("/api/students/" + id)
  },
  // Saves a student to the database
  saveStudent: function (studentData) {
    return axios.post("/api/students", studentData);
  },
  // Gets all instructors
  getInstructors: function () {
    return axios.get("/api/instructors")
  },
  // Gets the instructor with the given id
  getInstructor: function (id) {
    return axios.get("/api/instructors/" + id);
  },
  // Deletes the instructor with the given id
  deleteInstructor: function (id) {
    return axios.delete("/api/instructors/" + id)
  },
  // Saves an instructor to the database
  saveInstructor: function (instructorData) {
    return axios.post("/api/instructors", instructorData);
  }
};