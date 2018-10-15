import React, { Component } from 'react';
import API from "../../utils/API";

class ClassDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameOfClass: "",
            room: "",
            ageGroup: "",
            instructor: "",
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
                    id: classResp.data._id
                })
                if (classResp.data.instructor) {
                    this.setState({ instructor: classResp.data.instructor.firstName + " " + classResp.data.instructor.lastName })
                }
            })
    }

    handleDelete(id) {

    }

    componentWillMount() {
        this.loadClass()
        // console.log(this.props.match.params.id)
        // console.log(this.state)
    }
    render() {
        return (<div>
            <div className="card mt-3">
                <div className="card-header bg-secondary">
                    <h1 className="display-3 text-white">{this.state.nameOfClass}</h1>
                </div>
                <div className="card-body">

                    <h3>Instructor: {(this.state.instructor) ? this.state.instructor : " "}</h3>
                    <h3>Age Group: {this.state.ageGroup}</h3>
                </div>
            </div>




            <button className="btn btn-danger" onClick={this.handleDelete(this.state.id)}>Delete Class</button>
        </div>)
    }
}

export default ClassDetails