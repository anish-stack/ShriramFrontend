import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
const Register = () => {
  const [formdata, setFormdata] = useState({
    Name: "",
    Email: "",
    Password: "",
    ContactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const habdleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://eccomerce-av7e.onrender.com/api/v1/Register",
        formdata
      );
      if (res.data.success) {
        toast.success("Registration successful!");  
setTimeout(()=>{
    
    window.location.href="/Login"
},4000)
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      // Handle network errors or any other exceptions
      const errorMessage = error.response?.data?.message || "An error occurred. Please try again later.";
      toast.error(errorMessage);
      console.error(error);
    }
  };
  return (
    <div class="wrapper">
      <h2>Registration</h2>
      <form action="#" onSubmit={habdleSubmit}>
        <div class="input-box">
          <input
            type="text"
            name="Name"
            value={formdata.Name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            name="Email"
            value={formdata.Email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            name="ContactNumber"
            value={formdata.ContactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            required
          />
        </div>
        <div class="input-box">
          <input
            type="password"
            name="Password"
            value={formdata.Password}
            onChange={handleChange}
            placeholder=" password"
            required
          />
        </div>

        <div class="input-box ">
          <input type="Submit" value="Register Now" />
        </div>
        <div class="text">
          <h3>
            Already have an account? <Link to="/Login">Login now</Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Register;
