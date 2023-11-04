import React, { useContext, useState } from "react";

import { ImCross } from "react-icons/im";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "../../hook/url";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);
  console.log(cats)
  //   console.log(cat)
  //   console.log(cats)
  const navigate=useNavigate()
  const deleteCategory = (i) => {
    let updateCat = [...cats];
    updateCat.splice(i);
    setCats(updateCat);
  };
  const addCategory = () => {
    let updateCats = [...cats];
    updateCats.push(cat);
    setCat("");
    setCats(updateCats);
    console.log(updateCats);
  };

  const handleCreate=async (e)=>{
    e.preventDefault()
    const post={
      title,
      desc,
      username:user.username,
      userId:user._id,
      category:cats
    }
    // console.log(post)

    if(file){
      const data=new FormData()
      const filename=Date.now()+file.name
      data.append("img",filename)
      data.append("file",file)
      post.photo=filename
      // console.log(data)
      //img upload
      try{
        const imgUpload=await axios.post(URL+"/api/upload",data)
        // console.log(imgUpload.data)
      }
      catch(err){
        console.log(err)
      }
    }
    //post upload
    // console.log(post)
    try{
      const res=await axios.post(URL+"/api/posts/write",post,{withCredentials:true})
      navigate("/postDetails/"+res.data._id)
      // console.log(res.data)

    }
    catch(err){
      console.log(err)
    }
}

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
            onChange={(e)=>setTitle(e.target.value)}
            className="px-4 py-2 outline-none"
            placeholder="Enter Post Title"
          />
          <input type="file" onChange={(e)=>setFile(e.target.files[0])} className="px-4" />

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
                return (
                  <div
                    key={i}
                    className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
                  >
                    <p>{c}</p>
                    <p
                      onClick={() => deleteCategory(i)}
                      className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                    >
                      <ImCross />
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* text area */}
          <textarea
            rows={15}
            cols={30}
            className="px-4 py-2 outline-none "
            onChange={(e)=>setDesc(e.target.value)}
            placeholder="Enter post description"
          />
          <button
            type="submit" onClick={handleCreate} 
            className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-lg text-xl"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
