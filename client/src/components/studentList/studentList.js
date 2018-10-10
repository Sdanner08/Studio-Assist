import React, { Component } from 'react';
// import "./studentList.css";

class StudentList extends Component {
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Students</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><a href="#">1</a></th>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentList;