import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Classes from './pages/Classes/Classes';
import Students from './pages/Students/Students'
import StudentDetails from './pages/Students/studentDetails'
import Dashboard from './pages/Dashboard/Dashboard';
import ClassDetails from './pages/Classes/ClassDetails';
import Instructors from './pages/Instructors/Instructors'
import InstructorDetails from './pages/Instructors/instructorDetails'
import Login from './pages/Login/Login'
import API from './utils/API'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: localStorage.getItem("jwtToken"),
      redirect: false,
      username: "",
      password: ""
    }
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      API.login({
        username: this.state.username,
        password: this.state.password,
      }).then(data => { //based on response here either redirect or stay in loggin

        if (data.request.status === 200) {
          localStorage.setItem('jwtToken', data.data.token);
          this.setState({ redirect: true })
          window.location.reload();
        } else if (data.request.status === 401) {
          console.log("BAD")
        }
      })
        .catch(err => console.log(err));
    }
  }


  setRedirect = () => {
    this.setState({
      redirect: true
    }, () => {
    })
  };


  render() {
    return (
      <Router>
        <div>
          <Switch>
            {!this.state.isLoggedIn ? <div><Route exact path="/" render={(props) => (<Login {...props} handleLogin={() => this.handleLogin} handleInputChange={() => this.handleInputChange} />)} />
              <Redirect from="/" to="/" /></div> :
              <div>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/classes" component={Classes} />
                <Route exact path="/classes/:id" component={ClassDetails} />
                <Route exact path="/instructors" component={Instructors} />
                <Route exact path="/instructors/:id" component={InstructorDetails} />
                <Route exact path="/students" component={Students} />
                <Route exact path="/students/:id" component={StudentDetails} />
                {/* <Redirect from="/" to="/dashboard" /> */}
              </div>}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
