import React, { Component } from 'react';
import API from "../../utils/API";
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn';
import EditBtn from '../../components/EditBtn/EditBtn';
import AddClassModal from '../../components/AddClassModal/AddClassModal';

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
            schedule: "",
            showModal: false,
            instructors: [],
            id: ""
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
                    students: classResp.data.students
                })
                if (classResp.data.instructor) {
                    this.setState({ instructor: classResp.data.instructor.firstName + " " + classResp.data.instructor.lastName })
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
        return (<div>
            <div className="card mt-3">
                {console.log(this.state)}
                <div className="card-header bg-secondary">
                    <h1 className="display-3 text-white">{this.state.nameOfClass}</h1>
                </div>
                <div className="card-body">
                    <h2>Instructor: {this.state.instructor}</h2>
                    <h2>Room: {this.state.room}</h2>
                    <h2>Age Group: {this.state.ageGroup}</h2>
                </div>
            </div>

            <DeleteBtn onClick={() => this.handleDelete()} >Delete Class</DeleteBtn>
            <EditBtn onClick={this.showModal}>Edit Class</EditBtn>
            {modal}
        </div>)
    }
}

export default ClassDetails