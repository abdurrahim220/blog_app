import axios from "axios";
import React, { useContext, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { URL } from "../../hook/url";
import { AuthContext } from "../../Provider/AuthProvider";

const Comments = ({ c }) => {
 
  const { user } = useContext(AuthContext);
  const [deleted, setDeleted] = useState(false);
  
  const deleteComment = async (id) => {
    try {
      await axios.delete(URL+"/api/comments/"+id,{withCredentials:true})
      setDeleted(true)
    } catch (error) {
      console.log(error);
    }
  };
  if (deleted) {
    return null;
  }

  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">@{c.author}</h3>
        <div className="flex justify-center items-center space-x-4">
          <p>{new Date(c.createdAt).toString().slice(0, 15)}</p>
          <p>{new Date(c.createdAt).toString().slice(16, 24)}</p>
          <div className="flex items-center justify-center space-x-2">
            {user?._id === c?.userId ? (
              <p onClick={()=>deleteComment(c._id)} className="cursor-pointer">
                <MdDelete />
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <p className="px-4 mt-2">{c.comment}</p>
    </div>
  );
};

export default Comments;
