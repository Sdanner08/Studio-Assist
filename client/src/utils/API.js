import axios from "axios";

export default {
  // Gets all classes
  getClasses: function () {
    return axios.get("/api/classes")
  },
  getClassesByAge: function (id, age) {
    return axios.get(`/api/classes/${id}/${age}`)
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

  getActiveStudents: function () {
    return axios.get("/api/students/status/active")
  },

  getInactiveStudents: function () {
    return axios.get("/api/students/inactive")
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
    let data = new FormData()
    data.append('file', studentData.picture, studentData.picture.name)

    return axios.post("/api/students/", data);
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
  },
  // Gets all Tasks
  getTasks: function () {
    return axios.get("/api/tasks")
  },
  // Gets the Tasks with the given id
  getTask: function (id) {
    return axios.get("/api/tasks/" + id);
  },
  // Deletes the Tasks with the given id
  deleteTask: function (id) {
    return axios.delete("/api/tasks/" + id)
  },
  // Saves a Tasks to the database
  saveTask: function (taskData) {
    return axios.post("/api/tasks", taskData);
  },
  enrollAClass: function (classId, studentId) {
    return axios.post("/api/students/registerClass/", { classId, studentId })
  }
};