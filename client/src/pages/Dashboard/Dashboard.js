import React, { Component } from 'react';
import Calender from '../../components/calender/calender.js';
import Profile from '../../components/profile/profile.js'
import Newsletter from '../../components/Newsletter/newsletter'
import "./Dashboard.css";

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div id="header">
                    <h1> Welcome to Studio Assist</h1>
                </div>
                
                <div id="main">
                    <Profile/>
                    <Newsletter/>
                </div>
                <div id="calender">
                    <Calender/>
                </div>
                <div id="bottom">
                    <h1>Stuff Goes HERE</h1>
                </div>
            </div>
        );
    }
}

export default Dashboard;