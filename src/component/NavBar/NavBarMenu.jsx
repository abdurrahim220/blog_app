import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBarMenu = () => {

  const {user,setUser} = useContext(AuthContext);
  console.log(user)
  const handleLogout =()=>{
    fetch("http://localhost:5001/api/logout", {
      method: "GET", // Set the method to "GET" since it's a GET request
      credentials: "include" // Set withCredentials to true
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(null);
      });
  }
  return (
    <div>
      <div className="bg-black space-y-4 w-[200px] p-4 md:mr-32 rounded-md flex flex-col items-start absolute top-16 right-6">
        {!user && (
          <h3 className="text-white text-sm hover:text-gray-500">Login</h3>
        )}
        {!user && (
          <h3 className="text-white text-sm hover:text-gray-500">Register</h3>
        )}
        {user && (
          <h3 className="text-white text-sm hover:text-gray-500">Profile</h3>
        )}
        {user && (
          <h3 className="text-white text-sm hover:text-gray-500">Write</h3>
        )}
        {user && (
          <h3 className="text-white text-sm hover:text-gray-500">My Blogs</h3>
        )}
        {user && (
          <h3 onClick={handleLogout} className="text-white text-sm hover:text-gray-500">Logout</h3>
        )}
      </div>
    </div>
  );
};

export default NavBarMenu;
