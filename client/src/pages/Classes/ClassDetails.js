import React, { Component } from 'react';
import API from "../../utils/API";
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn';
import EditBtn from '../../components/EditBtn/EditBtn';
import AddClassModal from '../../components/AddClassModal/AddClassModal';
import Navbar from '../../components/Navbar/navbar';
import Attendance from '../../components/Attendance/Attendance';
import AttendanceAlert from '../../components/AttendanceAlert/AttendanceAlert'
import '../Classes/classes.css'
class ClassDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classes: [],
            nameOfClass: "",
            maxCapacity: "",
            room: "",
            ageGroup: "",
            cost: "",
            students: [],
            instructor: "",
            schedule: [],
            showModal: false,
            showAlert: false,
            instructors: [],
            picture: "",
            id: "",
            absentStudent: []
        }
        this.scheduleFormatted = []
    }


    setAttendance = (event) => {
        if (this.state.absentStudent.find(student => student === event.target.value)) {
            this.setState({ absentStudent: this.state.absentStudent.filter(student => student !== event.target.value) })
        } else {
            this.setState({ absentStudent: [...this.state.absentStudent, event.target.value] })
        }
    }

    loadClass() {
        API.getClass(this.props.match.params.id)
            .then(classResp => {
                this.setState({
                    nameOfClass: classResp.data.nameOfClass,
                    ageGroup: classResp.data.ageGroup,
                    room: classResp.data.room,
                    id: classResp.data._id,
                    students: classResp.data.students,
                    schedule: classResp.data.schedule,
                    time: classResp.data.time
                })
                if (classResp.data.instructor) {
                    this.setState({ instructor: classResp.data.instructor.firstName + " " + classResp.data.instructor.lastName, picture: classResp.data.instructor.picture })
                } else {
                    this.setState({ instructor: "", picture: "http://static.asiawebdirect.com/m/phuket/portals/phuket-com/homepage/yourguide/romantic/beaches/pagePropertiesImage/phuket-romantic-beaches.jpg" })
                }
            })
    }

    loadInstructors = () => {
        API.getInstructors().then(instructors => { this.setState({ instructors: instructors.data }) })
    }

    handleDelete() {
        API.deleteClass(this.state.id)
            .then(res => {
                const { history } = this.props;
                history.push("/classes")
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentWillMount() {
        this.loadClass()
        this.scheduleFormatted = this.state.schedule.map(day => `${day},`)
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.nameOfClass && this.state.maxCapacity) {
            API.saveClass({
                nameOfClass: this.state.nameOfClass,
                maxCapacity: this.state.maxCapacity,
                room: this.state.room,
                ageGroup: this.state.ageGroup,
                cost: this.state.cost,
                instructor: this.state.instructor,
                schedule: this.state.schedule,
                absentStudent: this.state.absentStudent,
                time: this.state.time
            })
                .then(res => this.loadClasses())
                .catch(err => console.log(err));
        }
    }

    handleAttendanceSubmit = event => {
        event.preventDefault();
        this.showAlert();
        if (this.state.absentStudent) {
            let attendance = {
                attendance: this.state.absentStudent
            }
            API.saveAttendance(this.state.id, attendance)
                .then(res => "")
                .catch(err => console.log(err));
        }
    }

    showModal = event => {
        this.setState({ showModal: true });
    }

    hideModal = event => {
        this.setState({ showModal: false });
    }

    showAlert = event => {
        this.setState({ showAlert: true });
    }

    hideAlert = event => {
        this.setState({ showAlert: false });
    }

    render() {
        var modal;
        if (this.state.showModal) {
            modal =
                <AddClassModal
                    onChange={this.handleInputChange}
                    onClose={this.hideModal}
                    onSave={this.handleFormSubmit}
                    nameOfClass={this.state.nameOfClass}
                    maxCapacity={this.state.maxCapacity}
                    room={this.state.room}
                    ageGroup={this.state.ageGroup}
                    cost={this.state.cost}
                    instructors={this.state.instructors}
                    instructor={this.state.instructor}
                    schedule={this.state.schedule}
                />;
        } else {
            modal = "";
        }

        var alert;
        if (this.state.showAlert) {
            alert =
                <AttendanceAlert
                    onClose={this.hideAlert}
                />
        } else {
            alert = "";
        }

        return (
            <div className="container">
                <Navbar />
                <div className="card mt-3">
                    <div className="card-header bg-primary">
                        <h2 className="text-white">{this.state.nameOfClass}</h2>
                    </div>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    {/* <h2>Instructor: {this.state.instructor}</h2> */}
                                    <h1>Class Details</h1>
                                    <ul className="list-group">
                                        <li className="list-group-item"><h3 className="d-inline mr-3">Room:</h3> {this.state.room}</li>
                                        <li className="list-group-item"><h3 className="d-inline mr-3">Age Group: </h3>{this.state.ageGroup}</li>
                                        <li className="list-group-item"><h3 className="d-inline mr-3">Schedule:</h3> {this.state.schedule.map(day => `${day}, `)}</li>
                                        <li className="list-group-item"><h3 className="d-inline mr-3">Time:</h3> {this.state.time}</li>

                                    </ul>
                                    {/* <h2>Room: {this.state.room}</h2>
                                    <h2>Age Group: {this.state.ageGroup}</h2>
                                    <h2>Schedule: {this.state.schedule.map(day => `${day}, `)}</h2>
                                    <h2>Time: {this.state.time}</h2> */}
                                </div>
                                <div className="col-md-4">
                                    <h2>Instructor</h2>
                                    <div className="card">
                                        <div className="instructorprofileImage"><img className="card-img-top pr-4" src={`${this.state.picture}`} alt="" /></div>
                                        <div className="body">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><h4>{this.state.instructor}</h4></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {modal}

                <Attendance students={this.state.students} onChange={this.setAttendance} onClick={(id, absentStudent) => this.handleAttendanceSubmit(id, absentStudent)} />

                {alert}

                <DeleteBtn onClick={() => this.handleDelete()} >Delete Class</DeleteBtn>
                <EditBtn onClick={this.showModal}>Edit Class</EditBtn>
            </div >)
    }
}

export default ClassDetails