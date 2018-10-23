import React, { Component } from 'react';
import ClassList from '../../components/classList/classList';
import AddBtn from '../../components/AddBtn/AddBtn';
import AddClassModal from '../../components/AddClassModal/AddClassModal';
import API from "../../utils/API";
import Navbar from './../../components/Navbar/navbar';
import './classes.css'

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
            instructors: [],
            monday: false,
            tueday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
            time: ""
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
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });


    };

    handleFormSubmit = event => {

        event.preventDefault();
        let schedule = []
        if (this.state.monday)
            schedule.push("Monday")
        if (this.state.tuesday)
            schedule.push("Tuesday")
        if (this.state.wednesday)
            schedule.push("Wednesday")
        if (this.state.thursday)
            schedule.push("Thursday")
        if (this.state.friday)
            schedule.push("Friday")
        if (this.state.saturday)
            schedule.push("Saturday")
        if (this.state.sunday)
            schedule.push("Sunday")

        if (this.state.nameOfClass && this.state.maxCapacity) {
            API.saveClass({
                nameOfClass: this.state.nameOfClass,
                maxCapacity: this.state.maxCapacity,
                room: this.state.room,
                ageGroup: this.state.ageGroup,
                cost: this.state.cost,
                instructor: this.state.instructor,
                schedule: schedule,
                time: this.state.time
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
                    <div className="row">
                        <h1 className="mr-auto">Classes</h1>
                        <AddBtn onClick={this.showModal}>Add Class</AddBtn>
                    </div>
                    {this.state.classes.length ? (
                        <div className="whiteBg">
                            <ClassList classes={this.state.classes} />
                        </div>
                    ) : (
                            <h3>No results to display</h3>
                        )}
                    {modal}
                </div>
            </div>

        );
    }
}

export default Classes;