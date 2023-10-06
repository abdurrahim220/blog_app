import React from "react";

import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comments from "../../component/Comments/Comments";
const PostDetails = () => {
  return (
    <div>
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 user of Artificial Intelligence Day to Day life
          </h1>

          <div className="flex items-center justify-center space-x-2">
            <p className="cursor-pointer">
              <BiEdit />
            </p>
            <p className="cursor-pointer">
              <MdDelete />
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 md:mt-4 ">
          <p>@abdurrahim</p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>16:45</p>
          </div>
        </div>

        {/* image */}
        <div>
          <img
            src="https://i.ibb.co/0jr88rP/max-duzij-q-Aj-Jk-un3-BI-unsplash.jpg"
            className="w-full mx-auto mt-8"
            alt=""
          />
        </div>

        <div>
          <p className="mx-auto mt-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            ad laborum fuga adipisci tenetur provident! Impedit repellat
            reprehenderit ex possimus! Sequi aperiam quibusdam itaque
            dignissimos, odio cupiditate tempore vel autem pariatur perspiciatis
            nulla error velit ratione ipsum mollitia natus deleniti modi
            consequatur fugiat. Tempore sint architecto officia a enim
            excepturi!
          </p>
        </div>

        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 cursor-pointer  py-1">
              Tech
            </div>
            <div className="bg-gray-300 rounded-lg px-3 cursor-pointer py-1">
              AI
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <h1 className="mt-6 mb-4 font-semibold">Comments:</h1>
          {/* see other whats comments */}
        <Comments/>
        <Comments/>
        <Comments/>
        </div>
        {/* comment */}
        <div className="flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="Write a comment"
            className="md:w-[90%] outline-none py-2 px-4 mt-4 md:mt-0"
          />
          <button className="bg-black text-white px-4 py-2 md:w-[10%] mt-4 md:mt-0">
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
