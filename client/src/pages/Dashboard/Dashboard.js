import React, { Component } from 'react';
import Calendar from '../../components/calendar/calendar.js';
import Newsletter from '../../components/Newsletter/newsletter'
import "./Dashboard.css";
import API from "../../utils/API";
import AddBtn from '../../components/AddBtn/AddBtn';
import AddTaskModal from './../../components/calendar/AddTaskModal';
import DeleteBtn from './../../components/DeleteBtn/DeleteBtn';
import DeleteTaskModal from './../../components/calendar/DeleteTaskModal';
import Navbar from './../../components/Navbar/navbar';

class Dashboard extends Component {
    
    state = {
        title: "",
        start: "",
        showModal: false,
        showDeleteModal: false,
    }

    componentDidMount() {
        this.loadTasks();
    }

    loadTasks = () => {
        API.getTasks()
                .then(res =>
                        this.setState({
                                events:res.data
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
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.start) {
            API.saveTask({
                title: this.state.title,
                start: this.state.start,
            
            })
                .then(res => this.loadTasks(), this.componentDidUpdate)
                .catch(err => console.log(err));
        }
    }

    showDeleteModal = event => {
        this.setState({ showDeleteModal: true});
    }
    hideDeleteModal = event => {
        this.setState({ showDeleteModal: false});
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
                    title={this.state.title}
                    start={this.state.start}
                />;
        } else if (this.state.showDeleteModal){
            modal=
            <DeleteTaskModal
                onChange={this.handleInputChange}
                onClose={this.hideDeleteModal}
                onSave={this.deleteTask}
                />;
        } else {
            modal = "";

        }
        return (
            <div>
            <Navbar />
            <div className="container">
                <div id="main">
                    <Newsletter/>
                </div>
                <div id="calendar">
                    <Calendar events={this.state.events}/>
                    <AddBtn onClick={this.showModal}>Add Task</AddBtn>
                    <DeleteBtn onClick={this.showDeleteModal}>Delete Task</DeleteBtn>
                    {modal}
                </div>
                <div id="bottom">
                </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;