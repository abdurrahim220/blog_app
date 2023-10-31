import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { URL } from "../../hook/url";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = {
      email: email,
      password: password,
    };
    try {
      const res = await axios.post(
        URL + "/api/login",
        { email,password },
        { withCredentials: true }
      );
      // console.log(res.data)
      setUser(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full flex justify-center items-center h-[70vh]">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-xl text-left font-bold">Login to your account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-4 border-2 border-black outline-0"
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            name="password"
            className="w-full px-4 py-4 border-2 border-black outline-0"
            placeholder="Enter your password"
            required
          />

          <input
            className="w-full px-4 py-4 text-lg font-bold rounded-lg bg-black text-white hover:bg-gray-500"
            type="submit"
            value="Login"
          />
        </form>

        <div className="flex space-x-3 justify-center items-center">
          <p>New Here?</p>
          <p>
            <Link to="/register" className="text-gray-500 hover:text-black">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
