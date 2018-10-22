import React, { Component } from 'react';
import StudentList from '../../components/studentList/studentList';
import AddBtn from '../../components/AddBtn/AddBtn';
import AddStudentModal from '../../components/AddStudentModal/AddStudentModal';
import API from "../../utils/API";
import Navbar from "../../components/Navbar/navbar"

class Students extends Component {

    state = {
        students: [],
        firstName: "",
        lastName: "",
        picture: "",
        birthday: "",
        parentLastName: "",
        parentFirstName: "",
        phone: "",
        classesEnrolled: [],
        showModal: false
    }

    componentDidMount() {
        this.loadStudents();
    }

    loadStudents = () => {
        API.getActiveStudents()
            .then(res =>
                this.setState({
                    students: res.data,
                    firstName: "",
                    lastName: "",
                    picture: "",
                    birthday: "",
                    parentFirstName: "",
                    parentLastName: "",
                    phone: ""
                })
            )
            .catch(err => console.log(err));
    };

    deleteStudent = id => {
        API.deleteStudent(id)
            .then(res => this.loadStudents())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleImageChange = event => {
        let files = event.target.files
        this.setState({ picture: files[0] })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName) {
            API.saveStudent({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                picture: this.state.picture,
                birthday: this.state.birthday,
                phone: this.state.phone,
                parentFirstName: this.state.parentFirstName,
                parentLastName: this.state.parentLastName
            })
                .then(res => this.loadStudents())
                .catch(err => console.log(err));
        }
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
                <AddStudentModal
                    onChange={this.handleInputChange}
                    onImageChange={this.handleImageChange}
                    onClose={this.hideModal}
                    onSave={this.handleFormSubmit}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    picture={this.state.picture}
                    birthday={this.state.birthday}
                    parentLastName={this.state.parentLastName}
                    parentFirstName={this.state.parentFirstName}
                    phone={this.state.phone}
                />;
        } else {
            modal = "";
        }
        return (
            <div>
                <Navbar />
                <div className="container">
                    {this.state.students.length ? (
                        <StudentList students={this.state.students} />
                    ) : (<h3>No Students</h3>

                        )}

                    <AddBtn onClick={this.showModal}>Add Student</AddBtn>
                    {modal}
                </div>
            </div>
        )
    }
}

export default Students;