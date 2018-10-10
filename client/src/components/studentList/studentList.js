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
                            <th scope="row"><a href="#">Saajan</a></th>
                        </tr>
                        <tr>
                            <th scope="row">Shane</th>
                        </tr>
                        <tr>
                            <th scope="row">Manuel</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentList;