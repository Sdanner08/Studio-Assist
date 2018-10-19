import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Classes from './pages/Classes/Classes';
import Students from './pages/Students/Students'
import StudentDetails from './pages/Students/studentDetails'
import Dashboard from './pages/Dashboard/Dashboard';
import Payment from './pages/Payment/Payment';
import ClassDetails from './pages/Classes/ClassDetails';
import Instructors from './pages/Instructors/Instructors'
import InstructorDetails from './pages/Instructors/instructorDetails'
import Login from './pages/Login/Login'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
              {/* <Route exact path="/" component={Dashboard} /> */}
              <Route exact path="/classes" component={Classes} />
              <Route exact path="/classes/:id" component={ClassDetails} />
              <Route exact path="/instructors" component={Instructors} />
              <Route exact path="/instructors/:id" component={InstructorDetails} />
              <Route exact path="/students" component={Students} />
              <Route exact path="/students/:id" component={StudentDetails} />
              <Route exact path="/payment" component={Payment} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/" component={Login} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
