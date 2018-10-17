import React, { Component } from 'react';
import "./newsletter.css";


class Newsletter extends Component {
    render() {
        return (
            <div id="dash" class="container-fluid">
                <h1>News of the Week</h1>
                <a href="https://placeholder.com"><img id="newLImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/British_Women%E2%80%99s_Olympic_swimming_team%2C_London%2C_1948.jpg/1200px-British_Women%E2%80%99s_Olympic_swimming_team%2C_London%2C_1948.jpg"class="news-image" alt="Profile" /> </a>
                <h6>New Classes starting next month</h6>
                    <ul>
                        <li>Kick Boxing</li>
                        <li>Ballet</li>
                        <li>Hot Yoga</li>
                    </ul>
                <h6>Vacations</h6>
                <p>George will be going on vacation next week so all his class will be handled by Sabrina.</p>
                <h6>testing</h6>
            </div>
        )
    }
}
export default Newsletter;