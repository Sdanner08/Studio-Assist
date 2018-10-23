import React, { Component } from "react";
import './navbar.css'
import jwt_decode from 'jwt-decode'
import { decode } from "punycode";


const logOut = () => {
    localStorage.clear();
}

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            picture: ""
        }
    }

    componentWillMount() {
        let token = localStorage.getItem('jwtToken')
        let decoded = jwt_decode(token)
        console.log(decoded)
        this.setState({ name: decoded.name, picture: decoded.picture })
    }

    render() {
        return (
            <div className="navSection">
                <nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
                    <a className="navbar-brand" href="/dashboard"><img src={require("../../assets/logo.png")} alt="studio assist logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/classes">Classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/instructors">Instructors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/students">Students</a>
                            </li>
                        </ul>
                        <div className="ml-auto">
                            {console.log(this.state)}
                            <img className="profilePic rounded-circle" src={this.state.picture} alt="profile pic"></img>
                            <h5 className="text-white d-inline"> {this.state.name} </h5>
                            <a className="btn btn-danger" onClick={logOut} href="/">Log Out</a>
                        </div>

                    </div>
                </nav>
            </div>)
    }
};

export default Navbar;