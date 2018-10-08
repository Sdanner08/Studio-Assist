import React, { Component } from 'react';
import ClassList from '../../components/studentList/studentList';

class Classes extends Component {
    render() {
        return (
            <div className="container">
                <ClassList />
            </div>
        );
    }
}

export default Classes;