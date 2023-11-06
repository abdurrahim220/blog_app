import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../../hook/url";
import axios from "axios";

const NavBarMenu = () => {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + "/api/logout", {
        withCredentials: true,
      });
      // console.log(res)
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="bg-black space-y-4 w-[200px] p-4 md:mr-32 rounded-md flex flex-col items-start absolute top-16 right-6">
        {!user && (
          <Link to="/login" className="text-white text-sm hover:text-gray-500">Login</Link>
        )}
        {!user && (
          <Link to='/register' className="text-white text-sm hover:text-gray-500">Register</Link>
        )}
        {user && (
          <Link to={'/profile/'+user._id} className="text-white text-sm hover:text-gray-500">Profile</Link>
        )}
        {user && (
          <Link to='write' className="text-white text-sm hover:text-gray-500">Write</Link>
        )}
        {user && (
          <Link to={'/myblog/'+user._id} className="text-white text-sm hover:text-gray-500">My Blogs</Link>
        )}
        {user && (
          <button
            onClick={handleLogout}
            className="text-white text-sm hover:text-gray-500"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBarMenu;
