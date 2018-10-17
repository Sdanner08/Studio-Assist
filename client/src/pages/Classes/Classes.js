import React, { Component } from 'react';
import ClassList from '../../components/classList/classList';
import AddBtn from '../../components/AddBtn/AddBtn';
import AddClassModal from '../../components/AddClassModal/AddClassModal';
import API from "../../utils/API";
import Navbar from './../../components/Navbar/navbar';

class Classes extends Component {
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
            schedule: "",
            showModal: false,
            instructors: []
        }
        this.loadClasses();
    }


    componentDidMount() {
        this.loadInstructors();
    }

    loadClasses = () => {
        API.getClasses()
            .then(res => {
                this.setState({
                    classes: res.data,
                    nameOfClass: "",
                    maxCapacity: "",
                    room: "",
                    ageGroup: "",
                    cost: "",
                    students: [],
                    instructor: "",
                    schedule: ""
                })
            }
            )
            .catch(err => console.log(err));
    };

    loadInstructors = () => {
        API.getInstructors().then(instructors => { this.setState({ instructors: instructors.data }) })
    }


    deleteClass = id => {
        API.deleteClass(id)
            .then(res => this.loadClasses())
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
        if (this.state.nameOfClass && this.state.maxCapacity) {
            API.saveClass({
                nameOfClass: this.state.nameOfClass,
                maxCapacity: this.state.maxCapacity,
                room: this.state.room,
                ageGroup: this.state.ageGroup,
                cost: this.state.cost,
                instructor: this.state.instructor,
                schedule: this.state.schedule
            })
                .then(res => this.loadClasses())
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
        return (
            <div>
                <Navbar />
                <div className="container">
                    {this.state.classes.length ? (
                        <ClassList classes={this.state.classes} />
                    ) : (
                            <h3>No results to display</h3>
                        )}

                    <AddBtn onClick={this.showModal}>Add Class</AddBtn>
                    {modal}
                </div>
            </div>

        );
    }
}

export default Classes;