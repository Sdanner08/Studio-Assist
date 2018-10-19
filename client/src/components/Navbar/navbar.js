import React from "react";
import './navbar.css'

const Navbar = (props) => (
    <div className="navSection">
    <nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
        <a className="navbar-brand" href="/dashboard"><img src={require("../../assets/logo.png")} alt="studio assist logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard">Home</a>
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
                <li className="nav-item">
                    <a className="nav-link" href="/payment">Pay</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
);

export default Navbar;