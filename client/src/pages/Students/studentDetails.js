import React, { Component } from 'react';
import API from "../../utils/API";
import ClassesEnrolled from '../../components/singleStudent/classesEnrolled'
import EnrollModal from '../../components/enrollInClassModal/enrollModal'
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn'

class StudentDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            birthday: "",
            age: "",
            id: "",
            classesEnrolled: [],
            parents: [],
            phone: "",
            showModal: false,
            classes: [],
            selectedClass: ""
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
                    // phone: studentResp.data.phone,
                    classesEnrolled: studentResp.data.classesEnrolled,
                    id: studentResp.data._id
                })
            })
    }


    //loads available classes to enroll in
    loadClasses() {
        API.getClassesByAge(this.state.id, this.state.age)
            .then(classes => {
                console.log(classes)
                this.setState({ classes: classes.data })
            })
    }

    componentWillMount() {
        this.loadStudent()//load student details
        //load classes available to sign up 
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

    //de
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
            <div>
                <div className="card mt-3">
                    {console.log(this.state)}
                    <div className="card-header bg-secondary">
                        <h1 className="display-3 text-white">{`${this.state.firstName} ${this.state.lastName}`}</h1>
                    </div>
                    <div className="card-body">
                        <h2>{`Birthday: ${this.state.birthday} \n`}</h2>
                        <h2>{`Age: ${this.state.age} \n`}</h2>
                        <h2>{`Parent: ${this.state.parentFirstName} ${this.state.parentLastName} \n`}</h2>
                        <h2>{`Phone Number: ${this.state.phone}`}</h2>
                        <h2>Classes Enrolled: </h2>

                        <div className="row">
                            <div className="col-md-6">
                                <ClassesEnrolled classes={this.state.classesEnrolled} />
                            </div>
                        </div>
                    </div>
                </div>

                <button className="btn btn-success" onClick={this.showModal}>Enroll</button>
                {modal}

                <DeleteBtn onClick={() => this.handleDelete()}>Remove Student</DeleteBtn>
            </div>
        )
    }
}

export default StudentDetails