import React, { useContext, useEffect, useState } from "react";
import HomePost from "./HomePost/HomePost";
import axios from "axios";
import { IF, URL } from "../../hook/url";
import { Link, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../Provider/AuthProvider";



const Home = () => {
  const { search } = useLocation();
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [posts, setPost] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [loader, setLoader] = useState(false);

  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts" + search);
      console.log(res.data)
      setPost(res.data);
      res.data.length === 0 ? setNoResult(true) : setNoResult(false);
      setLoader(false);
    } catch (error) {
      setLoader(true);
    }
  };
  useEffect(() => {
    fetchPost();
  }, [search]);

  return (
    <div className="px-8 md:px-[200px]">
      {loader ? (
        <Loading />
      ) : !noResult ? (
        posts.map((post, index) => {
          return <Link key={post._id} to={user?`/postDetails/${post._id}`:'/login'}><HomePost post={post} /></Link>;
        })
      ) : (
        <div className="text-center mt-16 font-bold">No Post Found!!</div>
      )}
    </div>
  );
};

export default Home;
