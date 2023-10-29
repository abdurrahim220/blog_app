import React from "react";

const NavBarMenu = () => {
  const user = true;
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
          <h3 className="text-white text-sm hover:text-gray-500">Logout</h3>
        )}
      </div>
    </div>
  );
};

export default NavBarMenu;
