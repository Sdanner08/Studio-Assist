import React, { Component } from 'react';
import API from "../../utils/API";
import ClassesEnrolled from '../../components/singleStudent/classesEnrolled';
import Absences from '../../components/singleStudent/absences';
import EnrollModal from '../../components/enrollInClassModal/enrollModal';
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn';
import Navbar from '../../components/Navbar/navbar'

class StudentDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            birthday: "",
            age: "",
            id: "",
            picture: "",
            classesEnrolled: [],
            parents: [],
            phone: "",
            showModal: false,
            classes: [],
            selectedClass: "",
            absentClasses: []
        }
    }


    //loads all student details inlcuding what classes they are enrolled in
    loadStudent() {
        API.getStudent(this.props.match.params.id)
            .then(studentResp => {
                this.setState({
                    firstName: studentResp.data.firstName,
                    lastName: studentResp.data.lastName,
                    birthday: studentResp.data.birthday,
                    age: studentResp.data.age,
                    picture: studentResp.data.picture,
                    parentFirstName: studentResp.data.parents[0].firstName,
                    parentLastName: studentResp.data.parents[0].lastName,
                    phone: studentResp.data.parents[0].phone,
                    classesEnrolled: studentResp.data.classesEnrolled,
                    id: studentResp.data._id
                })
            })
    }

    loadAbsences() {
        API.getAbsences(this.props.match.params.id)
            .then(classes => {
                this.setState({ absentClasses: classes.data })
            })

    }

    //loads available classes to enroll in
    loadClasses() {
        API.getClassesByAge(this.state.id, this.state.age)
            .then(classes => {
                this.setState({ classes: classes.data })
            })
    }

    componentWillMount() {
        this.loadStudent()//load student details
        //load classes available to sign up 
        this.loadAbsences()
    }

    //handle enroll class submit
    handleFormSubmit = event => {
        event.preventDefault();
        API.enrollAClass(this.state.selectedClass, this.state.id)
            .then(res => {
                this.loadStudent()
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleDelete() {
        API.deleteStudent(this.state.id)
            .then(res => {
                const { history } = this.props;
                history.push("/students")
            })
            .catch(err => console.log(err));
    }

    showModal = event => {
        this.loadClasses()
        this.setState({ showModal: true });
    }

    hideModal = event => {
        this.setState({ showModal: false });
    }

    render() {
        var modal;
        if (this.state.showModal) {
            modal =
                <EnrollModal
                    onChange={this.handleInputChange}
                    onClose={this.hideModal}
                    onSave={this.handleFormSubmit}
                    classes={this.state.classes}
                    id={this.state.id}
                />
        } else {
            modal = "";
        }

        return (
            <div className="container">
                <Navbar />
                <div className="card mt-3 mb-3">
                    <div className="card-header bg-primary">
                        <h1 className="text-white">{`${this.state.firstName} ${this.state.lastName}`}</h1>
                    </div>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="studentprofileImage"><img className="card-img-top" alt="student" src={`${this.state.picture}`} /></div>
                                        <div className="body">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">{`Birthday: ${this.state.birthday.substring(0, 10)} \n`}</li>
                                                <li className="list-group-item">{`Age: ${this.state.age} \n`}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h2 className="mt-3">Emergency Contact: </h2>
                                    <ul className="list-group">
                                        <li className="list-group-item">{`Parent: ${this.state.parentFirstName} ${this.state.parentLastName} \n`}</li>
                                        <li className="list-group-item">{`Phone Number: ${this.state.phone}`}</li>
                                    </ul>

                                </div>
                                <div className="col-md-8">
                                    <h2>Classes Enrolled: </h2>
                                    <div className="row">
                                        <ClassesEnrolled classes={this.state.classesEnrolled} />
                                    </div>
                                    <h2 className="mt-3">Absences: </h2>

                                    <div className="row">
                                        <Absences classes={this.state.absentClasses} id={this.state.id} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <button className="btn btn-success" onClick={this.showModal}>Enroll</button>
                {modal}

                <DeleteBtn onClick={() => this.handleDelete()}>Remove Student</DeleteBtn>
                {modal}
            </div>
        )
    }
}

export default StudentDetails