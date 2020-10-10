import React, { Component } from "react";
import { Link } from "react-router-dom";

// import styles
import "./navbar.scss";

// import components
import Logo from "shared/components/Logo";

class Navbar extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="uk-navbar-container">
        <nav
          className="uk-container uk-container-small uk-margin"
          uk-navbar="true"
        >
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo uk-text-center" href="#">
              bambutv
            </a>
            {/* <ul className="uk-navbar-nav ">
              <li>
                <a href="#" className="uk-text-bold">
                  Categories
                </a>
                <div
                  className="uk-navbar-dropdown"
                  uk-dropdown="animation: uk-animation-slide-bottom;"
                  duration="300"
                  mode="click"
                  align="left"
                  dropbar-mode="slide"
                  pos="bottom-left"
                >
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <Link to="">Contents</Link>
                      <Link to="">Upload</Link>
                      <Link to="">Analytics</Link>
                      <Link to="">Setting</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul> */}
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
              <li>
                <Link className="uk-link-reset" to="/contents">
                  Contents
                </Link>
              </li>
              <li>
                <Link className="uk-link-reset" to="/upload">
                  Upload
                </Link>
              </li>
              <li>
                <Link className="uk-link-reset" to="/analytics">
                  Analytics
                </Link>
              </li>
              {/* <div className="uk-navbar-item">
                <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  width="35"
                  className="uk-border-circle"
                  alt=""
                />
                &nbsp;
                <a href="#">RS</a>
                <div
                  class="uk-navbar-dropdown"
                  uk-dropdown="animation:uk-animation-slide-bottom;"
                  pos="bottom-justify"
                  duration="300"
                  mode="click"
                  align="left"
                  dropbar-mode="slide"
                >
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <a href="#">Settings</a>
                    </li>
                    <li>
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </div>
              </div> */}
              <li>
                <div className="uk-navbar-item">
                  <a
                    className="profile-icon uk-link-reset uk-border-circle"
                    href="#"
                  >
                    KF
                  </a>
                </div>
                <div
                  class="uk-navbar-dropdown"
                  uk-dropdown="animation:uk-animation-slide-bottom;"
                  pos="bottom-justify"
                  duration="300"
                  mode="click"
                  align="left"
                  dropbar-mode="slide"
                >
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <a href="#">Settings</a>
                    </li>
                    <li>
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
