import axios from "axios";

export default {
  // Gets all classes
  getClasses: function () {
    let token = localStorage.getItem('jwtToken')
    return axios.get("/api/classes", { headers: { Authorization: token } })
  },
  getClassesByAge: function (id, age) {
    let token = localStorage.getItem('jwtToken')
    return axios.get(`/api/classes/${id}/${age}`, { headers: { Authorization: token } })
  },
  // Gets the class with the given id
  getClass: function (id) {
    let token = localStorage.getItem('jwtToken')
    return axios.get("/api/classes/" + id, { headers: { Authorization: token } });
  },
  // Deletes the class with the given id
  deleteClass: function (id) {
    let token = localStorage.getItem('jwtToken')
    return axios.delete("/api/classes/" + id, { headers: { Authorization: token } })
  },
  // Saves a class to the database
  saveClass: function (classData) {
    let token = localStorage.getItem('jwtToken')
    return axios.post("/api/classes", classData, { headers: { Authorization: token } });
  },
  // Gets all students
  getStudents: function () {
    let token = localStorage.getItem('jwtToken')
    return axios.get("/api/students", { headers: { Authorization: token } })
  },

  getActiveStudents: function () {
    let token = localStorage.getItem('jwtToken')
    return axios.get("/api/students/status/active", { headers: { Authorization: token } })
  },

  getInactiveStudents: function () {
    return axios.get("/api/students/inactive")
  },
  // Gets the student with the given id
  getStudent: function (id) {
    let token = localStorage.getItem('jwtToken')
    return axios.get("/api/students/" + id, { headers: { Authorization: token } });
  },
  // Deletes the student with the given id
  deleteStudent: function (id) {
    return axios.delete("/api/students/" + id)
  },
  // Saves a student to the database
  saveStudent: function (studentData) {
    let token = localStorage.getItem('jwtToken')
    let data = new FormData()
    data.append('file', studentData.picture, studentData.picture.name)
    data.append('firstName', studentData.firstName)
    data.append('lastName', studentData.lastName)
    data.append('birthday', studentData.birthday)
    data.append('parentFirstName', studentData.parentFirstName)
    data.append('parentLastName', studentData.parentLastName)
    data.append('phone', studentData.phone)
    return axios.post("/api/students/", data, { headers: { Authorization: token } });
  },
  // Gets all instructors
  getInstructors: function () {
    let token = localStorage.getItem('jwtToken')
    return axios.get("/api/instructors", { headers: { Authorization: token } })
  },
  // Gets the instructor with the given id
  getInstructor: function (id) {
    let token = localStorage.getItem('jwtToken')
    return axios.get("/api/instructors/" + id, { headers: { Authorization: token } });
  },
  // Deletes the instructor with the given id
  deleteInstructor: function (id) {
    let token = localStorage.getItem('jwtToken')
    return axios.delete("/api/instructors/" + id, { headers: { Authorization: token } })
  },
  // Saves an instructor to the database
  saveInstructor: function (instructorData) {
    let token = localStorage.getItem('jwtToken')
    let data = new FormData()
    data.append('file', instructorData.picture, instructorData.picture.name)
    data.append('firstName', instructorData.firstName)
    data.append('lastName', instructorData.lastName)
    data.append('username', instructorData.username)
    data.append('password', instructorData.password)
    return axios.post("/api/instructors", data, { headers: { Authorization: token } });
  },
  // Saves attendance for a class to the database
  saveAttendance: function (id, attendance) {
    let token = localStorage.getItem('jwtToken')
    return axios.post("/api/classes/attendance/" + id, attendance, { headers: { Authorization: token } });
  },

  getAbsences: function (id) {
    let token = localStorage.getItem('jwtToken')
    return axios.get("/api/classes/getAbsences/" + id, { headers: { Authorization: token } })
  },
  // Gets all Tasks
  getTasks: function () {
    let token = localStorage.getItem('jwtToken')
    return axios.get("/api/tasks", { headers: { Authorization: token } })
  },
  // Gets the Tasks with the given id
  getTask: function (id) {
    let token = localStorage.getItem('jwtToken')
    return axios.get("/api/tasks/" + id, { headers: { Authorization: token } });
  },
  // Deletes the Tasks with the given id
  deleteTask: function (id) {
    let token = localStorage.getItem('jwtToken')
    return axios.delete("/api/tasks/" + id, { headers: { Authorization: token } })
  },
  // Saves a Tasks to the database
  saveTask: function (taskData) {
    let token = localStorage.getItem('jwtToken')
    return axios.post("/api/tasks", taskData, { headers: { Authorization: token } });
  },
  enrollAClass: function (classId, studentId) {
    let token = localStorage.getItem('jwtToken')
    return axios.post("/api/students/registerClass/", { classId, studentId }, { headers: { Authorization: token } })
  },
  login: function (loginData) {
    return axios.post("/api/instructors/login/", loginData)
  }
};