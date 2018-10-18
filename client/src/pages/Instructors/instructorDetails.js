import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn'
import API from "../../utils/API";

class InstructorDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            picture: "",
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
    render() {
        return (<div>
            <div className="card mt-3">
                <div className="card-header bg-secondary">
                    <h1 className="display-3 text-white">{`${this.state.firstName} ${this.state.lastName}`}</h1>
                </div>
                <div className="card-body">
                    <h2>{`Username: ${this.state.username} \n`}</h2>
                </div>
            </div>

            <DeleteBtn onClick={() => this.handleDelete()}>Remove Instructor</DeleteBtn>
        </div>)
    }
}

export default InstructorDetails