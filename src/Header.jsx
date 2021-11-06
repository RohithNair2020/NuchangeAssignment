import "./Header.css";
import { Link } from "react-router-dom";

import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="branding">
          <Link to="/">
            <h1>
              <span className="NU">NU</span>
              <span className="store">
                st<strong className="o">o</strong>re
              </span>
            </h1>
          </Link>
        </div>

        <div className="input-section">
          <div className="dropdown">
            <button className="dropbtn">
              Categories
              {/* <KeyboardArrowDownIcon /> */}
            </button>
            <div className="dropdown-content">
              <Link to="/fruits">Fruits</Link>
              <Link to="/vegetables">Vegetables</Link>
              <Link to="/meat">Meat</Link>
              <Link to="/dairy">Dairy</Link>
            </div>
          </div>
          <input className="search-bar" type="text" />
        </div>

        <div className="header-links">
          <div className="header-option">
            <Link className="nav-link" to="/">
              <span>Account</span>
            </Link>
          </div>
          <div className="header-option">
            <Link className="nav-link" to="/basket">
              <span className="basket">
                Basket
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
