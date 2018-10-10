import React, { Component } from 'react';
import StudentList from '../../components/studentList/studentList';
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn';
import AddBtn from '../../components/AddBtn/AddBtn';
import AddStudentModal from '../../components/AddStudentModal/AddStudentModal';
import API from "../../utils/API";

class Students extends Component {

    state = {
        firstName: "",
        lastName: "",
        picture: "",
        birthday: "",
        parents: [],
        classesEnrolled: [],
        showModal: false
    }

    componentDidMount() {
        this.loadStudents();
    }

    loadStudents = () => {
        API.getStudents()
            .then(res =>
                this.setState({
                    students: res.data,
                    firstName: "",
                    lastName: "",
                    picture: "",
                    birthday: "",
                    parents: [],
                    classesEnrolled: []
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

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.firstName && this.state.lastName) {
            API.saveStudent({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                picture: this.state.picture,
                birthday: this.state.birthday
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
                    onClose={this.hideModal}
                    onSave={this.handleFormSubmit}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    picture={this.state.picture}
                    birthday={this.state.birthday}
                />;
        } else {
            modal = "";
        }
        return (
            <div className="container">
                <StudentList />
                <AddBtn onClick={this.showModal}>Add Student</AddBtn>
                <DeleteBtn>Remove Student</DeleteBtn>
                {modal}
            </div>
        )
    }
}

export default Students;