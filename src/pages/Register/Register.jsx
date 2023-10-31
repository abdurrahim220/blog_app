import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {  useLocation, useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(username, email, password);
    const data = {
      username: username,
      email: email,
      password: password,
    };
    // console.log(data);
    fetch("http://localhost:5001/api/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate('/login')
        console.log(result);
        if (result.acknowledged === true) {
          Swal.fire("Good job!", "Data Added SuccessFully", "success");
        }
      });
  };
  return (
    <div className="w-full flex justify-center items-center h-[70vh]">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-xl text-left font-bold">Create an account</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="w-full px-4 py-4 border-2 border-black outline-0"
            placeholder="Enter your username"
          />
          <input
            type="email"
            name="email"
            className="w-full px-4 py-4 border-2 border-black outline-0"
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            className="w-full px-4 py-4 border-2 border-black outline-0"
            placeholder="Enter your password"
          />

          <input
            className="w-full px-4 py-4 text-lg font-bold rounded-lg bg-black text-white hover:bg-gray-500"
            type="submit"
            value="Register"
          />
        </form>

        <div className="flex space-x-3 justify-center items-center">
          <p>Already have an account?</p>
          <p>
            <Link to="/login" className="text-gray-500 hover:text-black">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
