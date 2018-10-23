import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn'
import API from "../../utils/API";
import EditBtn from '../../components/EditBtn/EditBtn';
import AddInstructorModal from '../../components/AddInstructorModal/AddInstructorModal';
import Navbar from '../../components/Navbar/navbar';
import ClassesEnrolled from '../../components/singleStudent/classesEnrolled'

class InstructorDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            picture: "",
            classes: [],
            id: ""
        }
    }
    loadInstructor() {
        API.getInstructor(this.props.match.params.id)
            .then(instructorResp => {
                this.setState({
                    firstName: instructorResp.data.firstName,
                    lastName: instructorResp.data.lastName,
                    username: instructorResp.data.username,
                    picture: instructorResp.data.picture,
                    classes: instructorResp.data.classes,
                    id: instructorResp.data._id
                })
                if (instructorResp.data.instructor) {
                    this.setState({ instructor: instructorResp.data.instructor.firstName + " " + instructorResp.data.instructor.lastName })
                }
            })
    }

    handleDelete() {
        API.deleteInstructor(this.state.id)
            .then(res => {
                const { history } = this.props;
                history.push("/instructors")
            })
            .catch(err => console.log(err));
    }

    componentWillMount() {
        this.loadInstructor()
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
            API.saveInstructor({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                picture: this.state.picture
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
                <AddInstructorModal
                    onChange={this.handleInputChange}
                    onClose={this.hideModal}
                    onSave={this.handleFormSubmit}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    username={this.state.username}

                />;
        } else {
            modal = "";
        }

        return (
            <div className="container">
                <Navbar />
                <div className="card mt-3">
                    <div className="card-header bg-primary">
                        <h3 className="text-white">{`${this.state.firstName} ${this.state.lastName}`}</h3>
                    </div>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="detailsImage col-md-4"><img className="card-img-top pr-4" src={`${this.state.picture}`} alt="" /></div>
                                <div className="col-md-8">
                                    <h2>{`Username: ${this.state.username} \n`}</h2>
                                    <h2>Classes Teaching: </h2>
                                    <div className="row">
                                        <ClassesEnrolled classes={this.state.classes} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <DeleteBtn onClick={() => this.handleDelete()}>Remove Instructor</DeleteBtn>
                <EditBtn onClick={this.showModal}>Edit Instructor</EditBtn>
                {modal}
            </div>)
    }
}

export default InstructorDetails