import React, { Component } from 'react';
import "./newsletter.css";


class Newsletter extends Component {
    render() {
        return (
            <div id="dash" class="container-fluid">
                <h1>News of the Week</h1>
                <a href="https://placeholder.com"><img src="https://via.placeholder.com/400x100"class="news-image" alt="Profile" /> </a>
                <h6>testing</h6>
                    <ul>
                        <li>Testing</li>
                        <li>Testing</li>
                        <li>Testing</li>
                    </ul>
                <h6>testing</h6>
                <h6>testing</h6>
            </div>
        )
    }
}
export default Newsletter;