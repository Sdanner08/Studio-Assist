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
            parents: []
            // showModal: false,
            // classes: []
        }
    }


    loadStudent() {
        API.getStudent(this.props.match.params.id)
            .then(studentResp => {
                this.setState({
                    firstName: studentResp.data.firstName,
                    lastName: studentResp.data.lastName,
                    birthday: studentResp.data.birthday,
                    age: studentResp.data.age,
                    classesEnrolled: studentResp.data.classesEnrolled,
                    id: studentResp.data._id
                })
            })
    }

    loadClasses() {
        API.getClasses()
            .then(classes => {
                this.setState({ classes: classes.data })
            })
    }

    componentWillMount() {
        this.loadStudent()
        this.loadClasses()
    }

    handleFormSubmit = event => {
        event.preventDefault();
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
                />
        } else {
            modal = "";
        }

        return (
            <div>
                <h1>{`${this.state.firstName} ${this.state.lastName}`}</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Class Enrolled</h3>
                        <ClassesEnrolled classes={this.state.classesEnrolled} />
                    </div>
                </div>
                <button className="btn btn-success" onClick={this.showModal}>Enroll</button>
                {modal}

                <DeleteBtn onClick={this.handleDelete()}>Remove Student</DeleteBtn>
            </div>
        )
    }
}

export default StudentDetails