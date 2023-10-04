import React from "react";

const HomePost = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://i.ibb.co/0jr88rP/max-duzij-q-Aj-Jk-un3-BI-unsplash.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 user of Artificial Intelligence Day to Day life
        </h1>
        <div className="flex items-center justify-between mb-2 text-sm font-semibold text-gray-500 space-x-4 md:mb-4">
          <p>@abdurrahim</p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>16:45</p>
          </div>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia
          laudantium aperiam culpa natus! Commodi repellat sint ratione ea
          consectetur?
        </p>
      </div>
    </div>
  );
};

export default HomePost;
