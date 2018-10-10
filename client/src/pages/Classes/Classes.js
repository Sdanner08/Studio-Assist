import React, { Component } from 'react';
import ClassList from '../../components/classList/classList';
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn';
import AddBtn from '../../components/AddBtn/AddBtn';
import AddClassModal from '../../components/AddClassModal/AddClassModal';
import API from "../../utils/API";;


class Classes extends Component {

    state = {
        classes: [],
        nameOfClass: "",
        maxCapacity: "",
        room: "",
        ageGroup: "",
        cost: "",
        students: [],
        instructor: "",
        schedule: "",
        showModal: false
    }

    componentDidMount() {
        this.loadClasses();
    }

    loadClasses = () => {
        API.getClasses()
            .then(res =>
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
            )
            .catch(err => console.log(err));
    };

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
        if(this.state.nameOfClass && this.state.maxCapacity) {
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
                    instructor={this.state.instructor}
                    schedule={this.state.schedule}
                />;
        } else {
            modal = "";
        }
        return (
            <div className="container">
                <ClassList />
                <AddBtn onClick={this.showModal}>Add Class</AddBtn>
                <DeleteBtn>Remove Class</DeleteBtn>
                {modal}
            </div>

        );
    }
}

export default Classes;