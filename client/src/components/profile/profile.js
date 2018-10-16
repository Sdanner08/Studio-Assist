import React, { Component } from 'react';
import "./profile.css";


class Profile extends Component {
    render() {
        return (
            <div id="profileArea" class="container-fluid">
              <div class="row">
                <div class="col-sm">
                    <div id="profileImage">
                        <a href="https://placeholder.com"><img src="https://amp.businessinsider.com/images/5b8eb06564dce81a008b583e-750-563.jpg"class="Profile-image" alt="Profile" /> </a>
                    </div>
                </div>
                <div id="nameHeader" class="col-sm">
                    <div id="profileHeader">
                        <h3>Jack Ryan</h3>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;