import React from "react";
import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  const user = false;
  return (
    <div className="flex justify-between items-center px-6 md:px-[200px] py-4">
      <div className="text-lg md:text-xl font-semibold">
        <Link to="/">Blog Market</Link>
      </div>

      <div className="flex justify-center items-center space-x-0">
        <p>
          <BsSearch />
        </p>
        <input
          type="text"
          placeholder="Search a post"
          className="outline-none px-3"
        />
      </div>

      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <li>
            <Link to="/write">Write</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

        {user ? (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        ) : (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default NavBar;
