import React, { Component } from 'react';
import API from "../../utils/API";

class ClassDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameOfClass: "",
            room: "",
            ageGroup: "",
            instructors: ""

        }
    }
    loadClass() {
        API.getClass(this.props.match.params.id)
            .then(classResp => {
                this.setState({
                    nameOfClass: classResp.data.nameOfClass,
                    ageGroup: classResp.data.ageGroup,
                    room: classResp.data.room,
                    instructor: classResp.data.instructor.firstName + " " + classResp.data.instructor.lastName
                })

            })
    }

    componentWillMount() {
        this.loadClass()
    }
    render() {

        return (<div>
            {}
            <h1>Name of Class: {this.state.nameOfClass}</h1>
            <h2>Instructor: {this.state.instructor}</h2>
            <h2>Age Group: {this.state.ageGroup}</h2>

        </div>)
    }
}

export default ClassDetails