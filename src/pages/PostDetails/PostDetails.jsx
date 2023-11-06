import React, { useContext, useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comments from "../../component/Comments/Comments";
import { useNavigate, useParams } from "react-router-dom";
import { IF, URL } from "../../hook/url";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../component/Loading/Loading";

const PostDetails = () => {
  const { user } = useContext(AuthContext);
  const postId = useParams().id;
  const [posts, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  // console.log(postId);

  useEffect(() => {
    const fetchPost = async () => {
      setLoader(true);
      try {
        const res = await axios.get(URL + "/api/posts/" + postId);
        // console.log(res.data);
        setPost(res.data);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(true);
      }
    };
    fetchPost();
  }, [postId]);
  
  const handleDeletePost = async () => {
    try {
      const res = await axios.delete(URL + "/api/posts/" + postId, {
        withCredentials: true,
      });
      // console.log(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(() => {
    const fetchPostComments = async () => {
      setLoader(true)
      try {
        const res = await axios.get(URL + "/api/comments/post/" + postId);
        setComments(res.data);
        setLoader(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostComments()
  }, [postId]);

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL + "/api/comments/write", {
        comment: comment,
        author: user.username,
        postId: postId,
        userId: user._id,
      },{withCredentials:true})
      // set the data to post fetch comments
      setComments([...comments, res.data]);
      // Clear the comment input field or reset it as needed
      setComment("");
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      {loader ? (
        <Loading />
      ) : (
        <div className="px-8 md:px-[200px] mt-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black md:text-3xl">
              {posts.title}
            </h1>

            {user?._id === posts?.userId && (
              <div className="flex items-center justify-center space-x-2">
                <p
                  className="cursor-pointer"
                  onClick={() => navigate("/edit/" + postId)}
                >
                  <BiEdit size={30} />
                </p>
                <p className="cursor-pointer">
                  <MdDelete onClick={handleDeletePost} size={30} />
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-2 md:mt-4 ">
            <p>@{posts.username}</p>
            <div className="flex space-x-2">
              <p>{new Date(posts.createdAt).toString().slice(0, 15)}</p>
              <p>{new Date(posts.createdAt).toString().slice(16, 24)}</p>
            </div>
          </div>

          {/* image */}
          <div>
            <img
              src={IF + posts.photo}
              className="w-full mx-auto mt-8"
              alt=""
            />
          </div>

          <div>
            <p className="mx-auto mt-8 ">{posts.desc}</p>
          </div>

          <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
              {posts.category?.map((c, i) => (
                <div
                  key={i}
                  className="bg-gray-300 rounded-lg px-3 cursor-pointer  py-1"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <h1 className="mt-6 mb-4 font-semibold">Comments:</h1>
            {/* see other whats comments */}
            {comments?.map((c) => {
              return <Comments key={c._id} c={c} />;
            })}
          </div>
          {/* comment */}
          <div className="flex flex-col mt-4 md:flex-row">
            <input
              type="text"
              placeholder="Write a comment"
              className="md:w-[90%] outline-none py-2 px-4 mt-4 md:mt-0"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              onClick={postComment}
              className="bg-black text-white px-4 py-2 md:w-[10%] mt-4 md:mt-0"
            >
              Add Comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
