import React from "react";
import ProfilePost from "../../component/ProfilePost/ProfilePost";

const Profile = () => {
  return (
    <div>
      <div className="px-8 md:px-[200px] items-start mt-8 flex md:flex-row flex-col-reverse">
        <div className="flex flex-col md:w-[70%] w-full">
          <h1 className="text-xl font-bold mb-4">Your posts:</h1>
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </div>

        <div className="md:sticky md:top-16 flex justify-start md:justify-end md:w-[30%] w-full items-start md:items-end">
          <div className="flex flex-col space-y-4">
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            <input
              type="text"
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your username"
            />
            <input
              type="email"
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your email"
            />
            <input
              type="password"
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your password"
            />

            <div className="flex items-center space-x-4 mt-8">
              <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">
                Update
              </button>
              <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
