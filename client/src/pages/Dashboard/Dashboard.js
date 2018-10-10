import React, { Component } from 'react';
import Calender from '../../components/calender/calender.js';
import Profile from '../../components/profile/profile.js'

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <Profile/>
                <Calender/>
            </div>
        );
    }
}

export default Dashboard;