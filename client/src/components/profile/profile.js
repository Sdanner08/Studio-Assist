import React, { Component } from 'react';
import "./profile.css";


class Profile extends Component {
    render() {
        return (
            <div id="profileArea" class="container-fluid">
              <div class="row">
                <div class="col-sm">
                    <div id="profileImage">
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/100x100"class="Profile-image" alt="Profile" /> </a>
                    </div>
                </div>
                <div class="col-sm">
                    <div id="profileHeader">
                        <h3>Name</h3>
                        <h6>Children's Names</h6>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;