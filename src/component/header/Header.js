import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import logo from "./Shir.png";
import toast from "react-hot-toast";
function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const token = localStorage.getItem("token");

  const habdleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        "https://eccomerce-av7e.onrender.com/api/v1/Logout",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        toast.success("Logut successful!");
        localStorage.removeItem("token");
        window.location.reload();
        setTimeout(() => {
          const checkAnyRoute = sessionStorage.getItem("anyRoute");
          if (checkAnyRoute) {
            // window.location.href=`${checkAnyRoute}`
          } else {
            window.location.href = `/`;
          }
        }, 2000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      // Handle network errors or any other exceptions
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred. Please try again later.";
      toast.error(errorMessage);
      console.error(error);
    }
  };
  const Redirect = () => {
    window.location.href = "/";
  };
  return (
    <div className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        <img src={logo} onClick={Redirect} alt="logo" />
      </div>

      <div
        className={`menu-btn ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav ${isMenuOpen ? "open" : ""}`}>
        <li onClick={toggleMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/shop">Shop</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/contact">Contact</Link>
        </li>

        <div className="dropdown">
  <li className="dropdown-toggle" onClick={() => { toggleDropdown(); }}>
    <Link to="#">Company Policy</Link>
  </li>
  {isOpen && (
    <div className="dropdown-menu">
      <ul>
        <li onClick={() => { toggleDropdown(); toggleMenu(); }}>
          <Link to="/policy">Privacy Policy</Link>
        </li>
        <li onClick={() => { toggleDropdown(); toggleMenu(); }}>
          <Link to="/term">Terms & Condition</Link>
        </li>
        <li onClick={() => { toggleDropdown(); toggleMenu(); }}>
          <Link to="/refund">Cancellation / Refund Policies</Link>
        </li>
        <li onClick={() => { toggleDropdown(); toggleMenu(); }}>
          <Link to="/shipping-policy">Shipping Policy</Link>
        </li>
      </ul>
    </div>
  )}
</div>

        {/* <div className="dropdown">
          <li className="dropdown-toggle"  onClick={toggleDropdown}>
          <Link to="#">Company Policy</Link>
          </li>
          {isOpen && (
            <div className="dropdown-menu">
              <ul>
                <li onClick={[toggleDropdown,toggleMenu]}>
                  <Link to="/policy">Privacy Policy</Link>
                </li>
                <li onClick={toggleDropdown}>
                  <Link to="/term">Terms & Condition</Link>
                </li>
                <li onClick={toggleDropdown}>
                  <Link to="/refund">Cancellation / Refund Policies</Link>
                </li>
                <li onClick={toggleDropdown}>
                  <Link to="/shipping-policy">Shipping Policy</Link>
                </li>
              </ul>
            </div>
          )}
        </div> */}

        {/* <li>
          <Link to="/cart">Privacy Policy</Link>
          <ul>
            <select>
              <option value="" key="">
              <li>
                <Link to="/cart">Terms & Condition</Link>
              </li>
              <li>
                <Link to="/cart">Cancellation / Refund Policies</Link>
              </li>
              <li>
                <Link to="/cart">Shipping Policy</Link>
              </li>
              </option>
            </select>
          </ul>
        </li> */}

        <ul className="user">
          <li>
            <Link to="/cart">
              <span className="cart-icon">
                <i class="ri-shopping-cart-line"></i>
              </span>
            </Link>
          </li>
          {token ? (
            // If token exists, show Logout link
            <li>
              <Link to="/Profile" className="login-register button">
                Profile
              </Link>
            </li>
          ) : (
            // If token does not exist, show Login link
            <li>
              <Link to="/Register" className="login-register button">
                Register
              </Link>
            </li>
          )}
          {token ? (
            // If token exists, show Logout link
            <li>
              <Link onClick={habdleLogout} className="login-register button">
                Logout
              </Link>
            </li>
          ) : (
            // If token does not exist, show Login link
            <li>
              <Link to="/login" className="login-register button">
                Login
              </Link>
            </li>
          )}
        </ul>
      </ul>
    </div>
  );
}

export default Header;