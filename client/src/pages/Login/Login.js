import React, { Component } from 'react';
import './Login.css'
import Particles from 'react-particles-js';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';

const particlesOpt = {
  "particles": {
    "number": {
      "value": 6,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#1b1e34"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 106.5349316203568,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 10,
        "size_min": 40,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 200,
      "color": "#ffffff",
      "opacity": 1,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 8,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

class Login extends Component {

  componentWillMount() {
    console.log(this.props)
  }

  render() {

    return (
      <div>
        <div id="particlesArea">
          <Particles params={particlesOpt} />
        </div>

        <div id="loginArea" className="container jumbotron loginContainer">
          <form>
            <img id="loginLogo" src={require("../../assets/loginLogo.png")} alt="studio assist logo" />
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input type="text" className="form-control" name="username" onChange={this.props.handleInputChange()} placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" name="password" onChange={this.props.handleInputChange()} placeholder="Password" />
            </div>
            <button type="submit" onClick={this.props.handleLogin()} className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;