import React from "react";
import "./navbar.css";

const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Studio Assist</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/classes">Classes</a>
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
);

export default Navbar;