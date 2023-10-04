import React, { useState } from "react";

import { ImCross } from "react-icons/im";

const CreatePost = () => {
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);
//   console.log(cat)
//   console.log(cats)

  const addCategory = () => {
   
    let updateCats = [...cats];
    updateCats.push(cat);
    setCat("");
    setCats(updateCats);
    console.log(updateCats)
  };
  const deleteCategory = () => {};

  return (
    <div>
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text-xl">Create a Post</h1>
        <form
          className="w-full md:space-y-8 mt-4 flex flex-col space-y-4"
          action=""
        >
          <input
            type="text"
            className="px-4 py-2 outline-none"
            placeholder="Enter Post Title"
          />
          <input type="file" className="px-4" />

          {/* category */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                type="text"
                className="px-4 py-2 outline-none"
                placeholder="Enter post category"
              />
              <div
                onClick={addCategory}
                className="bg-black text-white py-2 px-4 font-semibold cursor-pointer"
              >
                add
              </div>
            </div>

            {/* categories */}
            <div className="flex mt-3">
              {cats?.map((c, i) => {
                return <div key={i} className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md">
                  <p>{c}</p>
                  <p
                    onClick={deleteCategory}
                    className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                  >
                    <ImCross />
                  </p>
                </div>;
              })}
            </div>


          </div>
          {/* text area */}
          <textarea
            rows={15}
            cols={30}
            className="px-4 py-2 outline-none "
            placeholder="Enter post description"
          />
          <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-lg text-xl">
            Create
          </button>
          <form action=""></form>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;