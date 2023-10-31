import React from "react";

const HomePost = ({post}) => {
  const {username,desc,photo,title,createdAt} = post;
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src={photo}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {title}
        </h1>
        <div className="flex items-center justify-between mb-2 text-sm font-semibold text-gray-500 space-x-4 md:mb-4">
          <p>@{username}</p>
          <div className="flex space-x-2">
            <p>{new Date(createdAt).toString().slice(0,15)}</p>
            <p>{new Date(createdAt).toString().slice(16,24)}</p>
          </div>
        </div>
        <p className="">
          {desc.slice(0,200)+"...Read more"}
        </p>
      </div>
    </div>
  );
};

export default HomePost;
