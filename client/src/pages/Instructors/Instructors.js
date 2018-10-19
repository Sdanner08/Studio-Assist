import React, { Component } from 'react';
import InstructorList from '../../components/instructorList/instructorList';
import AddBtn from '../../components/AddBtn/AddBtn';
import AddInstructorModal from '../../components/AddInstructorModal/AddInstructorModal';
import API from "../../utils/API";
import Navbar from './../../components/Navbar/navbar';


class Instructors extends Component {

    state = {
        instructors: [],
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        picture: "",
        classes: [],
        showModal: false
    }

    componentDidMount() {
        this.loadInstructors();
    }

    loadInstructors = () => {
        API.getInstructors()
            .then(res =>
                this.setState({
                    instructors: res.data,
                    firstName: "",
                    lastName: "",
                    username: "",
                    password: "",
                    picture: ""
                })
            )
            .catch(err => console.log(err));
    };

    deleteInstructor = id => {
        API.deleteInstructor(id)
            .then(res => this.loadInstructors())
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
        if (this.state.firstName && this.state.lastName) {
            API.saveInstructor({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
                picture: this.state.picture
            })
                .then(res => this.loadInstructors())
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
                <AddInstructorModal
                    onChange={this.handleInputChange}
                    onClose={this.hideModal}
                    onSave={this.handleFormSubmit}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    username={this.state.username}
                    password={this.state.password}
                    picture={this.state.picture}
                />;
        } else {
            modal = "";
        }
        return (
            <div>
                <Navbar />
                <div className="container">
                    {this.state.instructors.length ? (
                        <InstructorList instructors={this.state.instructors} />
                    ) : (<h3>No Instructors</h3>

                        )}

                    <AddBtn onClick={this.showModal}>Add Instructor</AddBtn>
                    {modal}
                </div>
            </div>
        )
    }
}

export default Instructors;