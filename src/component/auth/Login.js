import "./Login.css";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Login = () => {
  const [formdata, setFormdata] = useState({
    Email: "",
    Password: "",
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
        "https://eccomerce-av7e.onrender.com/api/v1/Login",
        formdata
      );
      console.log(res.data.Token);
      localStorage.setItem('token',res.data.Token)
      if (res.data.success) {
        toast.success("Login successful!");
        setTimeout(()=>{
          const checkAnyRoute = sessionStorage.getItem('anyRoute')
          if(checkAnyRoute){
            window.location.href=`${checkAnyRoute}`

          }
          else{
            window.location.href=`/`

          }
        },2000)
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
  return (
    <div class="wrapper">
      <h2>Login</h2>
      <form action="#" onSubmit={habdleSubmit}>
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
            type="password"
            name="Password"
            value={formdata.Password}
            onChange={handleChange}
            placeholder="**********"
      
            required
          />
        </div>

        <div class="input-box ">
          <input type="Submit" value="Login Now" />
        </div>
        <div class="text">
          <h3>
            I have not an account? <Link to="/Register">Register now</Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Login;
