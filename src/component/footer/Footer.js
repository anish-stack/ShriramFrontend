import React from "react";
import "./footer.css";
import logo from "./Shir.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="main-footer">
        <div className="columns">
          <h4 className="main-head">About Company</h4>
          <hr />
          <div className="logo-comapnay">
            <img src={logo} alt="logo" />
          </div>
          <p>
            Welcome to Shree Ram Garments, where fashion meets quality in the
            heart of our curated collection. Nestled in the vibrant cityscape,
            our garments shop is a haven for those who seek style without
            compromise.
          </p>
        </div>
        <div className="columns">
          <h4 className="main-head">Quick Links</h4>
          <hr />
          <div className="links-quicks">
            <ul className="main-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>

              <li>
                <Link to="/cart">Cart</Link>
              </li>

              <li>
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/policy">Privacy-Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="columns">
          <h4 className="main-head">Address</h4>
          <hr />
          <div className="links-quicks">
            <span className="fas fa-map-marker-alt"></span>
            <span className="texts">Gandhi Nagar,Delhi</span> <br />
            <span className="fas fa-user"></span>Contact Person
            <br />
            <p className="texts"> Narendra Singh </p>
            <p className="texts"> Radheshyam </p>
            <div className="phone">
              <span className="fas fa-phone-alt"></span>
              <div>
                <span className="texts">+91 8595530849</span> <br></br>
                <span className="texts">+91 8368647680</span> <br></br>
                <span className="texts">+91 8745986480</span>
              </div>
            </div>
            <div className="emil">
              <span className="fas fa-envelope"></span>
              <span className="texts">company@seoneg7g.com</span>
            </div>
          </div>
        </div>
        <div className="columns">
          <h2>Sign Up Newsletter</h2>
          <hr />

          <div className="content">
            <form action="#">
              <div className="emails">
                <div className="texts">Email *</div>
                <input type="email" required />
              </div>

              <div className="btn">
                <button className="button" type="submit">
                  Send
                </button>
              </div>
            </form>
            <div className="social">
              <a
                href="https://www.facebook.com/profile.php?id=61555538820923&is_tour_dismissed=true"
                target="blank"
              >
                <span className="fab fa-facebook-f"></span>
              </a>
              <a href="https://www.instagram.com/seoneg7g/" target="blank">
                <span className="fab fa-instagram"></span>
              </a>
             < a href="https://www.youtube.com/channel/UC-y2mY_iUnELtWZksoyZExQ" target="blank">
                <span className="fab fa-youtube"></span>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">
            Design By <a href="https://www.dgmt.in">DGMT</a> |{" "}
          </span>
          <span className="far fa-copyright"></span>
          <span> 2024 All rights reserved.</span>
        </center>
      </div>
    </footer>
  );
};

export default Footer;
