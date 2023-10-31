import React, { useEffect, useState } from "react";
import HomePost from "./HomePost/HomePost";
import axios from "axios";
import { URL } from "../../hook/url";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { search } = useLocation();
  console.log(search);

  const [posts, setPost] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const fetchPost = async () => {
    try {
      const res = await axios.get(URL + "/api/posts" + search);
      console.log(res.data);
      setPost(res.data);
      
      res.data.length === 0 ? setNoResult(true) : setNoResult(false);

    } catch (error) {}
  };
  useEffect(() => {
    fetchPost();
  }, [search]);

  return (
    <div className="px-8 md:px-[200px]">
      {!noResult ? (
        posts.map((post, index) => {
          return <HomePost key={index} post={post} />;
        })
      ) : (
        <div className="text-center mt-16 font-bold">No Post Found!!</div>
      )}
    </div>
  );
};

export default Home;
