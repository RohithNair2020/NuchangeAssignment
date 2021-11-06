import './Footer.css';

import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
          <div className="footer">
            <div className="footer-links">
              <div className="footer-columns">
                <a href="#">Contact</a>
                <a href="#">Affiliate</a>
                <a href="#">Work with us</a>
                <a href="#">Careers</a>
                <a href="#">History</a>
              </div>
              <div className="footer-columns">
                <a href="#">Our Partners</a>
                <a href="#">Blogs</a>
                <a href="#">Expertise</a>
                <a href="#">About Us</a>
                <a href="#">Gallery</a>
              </div>
              <div className="footer-columns">
                <a href="#">Sell on NUstore</a>
                <a href="#">Press Releases</a>
                <a href="#">Global Selling</a>
                <a href="#">App Download</a>
                <a href="#">Gallery</a>
              </div>
            </div>
            <hr />
            <div className="footer-statement">
              <h5>
                Copyright 2021 &copy; | <a href="https://www.nuchange.com/">NuChange Informatics</a>
              </h5>
            </div>
          </div>
        );
    }
}

export default Footer;