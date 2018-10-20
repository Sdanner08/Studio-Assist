import React, { Component } from 'react';
import "./newsletter.css";


class Newsletter extends Component {
    render() {
        return (
            <div id="dashSumm">
                <div id="classJumbo" className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 id="jumboName" className="display-4">Classes</h1>
                        <p className="lead">1</p>
                    </div>
                </div>

                <div id="studentJumbo" className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 id="jumboName" className="display-4">Students</h1>
                        <p className="lead">2</p>
                    </div>
                </div>

                <div id="instructorsJumbo" className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 id="jumboName" className="display-4">Instructors</h1>
                        <p className="lead">3</p>
                    </div>
                </div>

            </div>
        )
    }
}
export default Newsletter;