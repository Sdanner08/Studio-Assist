import React, { Component } from 'react';
import Calendar from '../../components/calendar/calendar.js';
import Profile from '../../components/profile/profile.js'
import Newsletter from '../../components/Newsletter/newsletter'
import "./Dashboard.css";
import API from "../../utils/API";
import AddBtn from '../../components/AddBtn/AddBtn';
import AddTaskModal from './../../components/calendar/AddTaskModal'
import Navbar from './../../components/Navbar/navbar'

class Dashboard extends Component {
    
    state = {
        title: "",
        start: "",
        showModal: false
    }

    componentDidMount() {
        this.loadTasks();
    }

    loadTasks = () => {
        API.getTasks()
            .then(res =>
                this.setState({
                    title: res.data,
                    start: "",
                })
            )
            .catch(err => console.log(err));
    };

    deleteTask = id => {
        API.deleteTask(id)
            .then(res => this.loadTasks())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { title, value } = event.target;
        this.setState({
            [title]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.start) {
            API.saveTask({
                title: this.state.title,
                start: this.state.start,
            
            })
                .then(res => this.loadTasks())
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
                <AddTaskModal
                    onChange={this.handleInputChange}
                    onClose={this.hideModal}
                    onSave={this.handleFormSubmit}
                    title={this.state.tilte}
                    start={this.state.start}
                />;
        } else {
            modal = "";
        }
        return (
            <div>
            <Navbar />
            <div className="container">
                <div id="header">
                    <h1>Welcome to Studio Assist</h1>
                </div>
                
                <div id="main">
                    <Profile/>
                    <Newsletter/>
                </div>
                <div id="calendar">
                    <Calendar/>
                    <AddBtn onClick={this.showModal}>Add Task</AddBtn>
                    {modal}
                </div>
                <div id="bottom">
                    <h1>Stuff Goes HERE</h1>
                </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;