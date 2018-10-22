import React, { Component } from 'react';
import "./newsletter.css";
import API from "../../utils/API";



class Newsletter extends Component {
   
    state = {
        students: [],
        instructors: [],
        classes: [],
    }

    componentDidMount() {
        this.loadStudents();
        this.loadInstructors();
        this.loadClasses();
    }

    loadStudents = () => {
        API.getActiveStudents()
            .then(res =>
                this.setState({
                    students: res.data,
                })
            )
            .catch(err => console.log(err));
    };


loadInstructors = () => {
    API.getInstructors()
        .then(res =>
            this.setState({
                instructors: res.data,
            })
        )
        .catch(err => console.log(err));
};

loadClasses = () => {
    API.getClasses()
        .then(res => {
            this.setState({
                classes: res.data,
            })
        }
        )
        .catch(err => console.log(err));
};

    render() {
        return (
            <div id="dashSumm" className="row d-flex justify-content-around">
                <div id="classJumbo" className="jumbotron jumbotron-fluid col-md-3">
                    <div className="container">
                        <h1 id="jumboName" className="display-4 text-center">Classes</h1>
                        <hr id="decoration"/>
                        <p className="lead text-center">{this.state.classes.length} of Classes</p>
                    </div>
                </div>

                <div className="col-md-1">
                    </div>
                <div id="studentJumbo" className="jumbotron jumbotron-fluid col-md-3">
                    <div className="container">
                        <h1 id="jumboName" className="display-4 text-center">Students</h1>
                        <hr id="decoration"/>
                        <p className="lead text-center">{this.state.students.length} of Students </p>
                    </div>
                </div>
                <div className="col-md-1">
                    </div>
                <div id="instructorsJumbo" className="jumbotron jumbotron-fluid col-md-3">
                    <div className="container">
                        <h1 id="jumboName" className="display-4 text-center">Instructors</h1>
                        <hr id="decoration"/>
                        <p className="lead text-center">{this.state.instructors.length} of Instructors</p>
                    </div>
                </div>
            </div>


        )
    }
}
export default Newsletter;