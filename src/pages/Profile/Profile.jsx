import React, { useContext, useEffect, useState } from "react";
import ProfilePost from "../../component/ProfilePost/ProfilePost";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../hook/url";

const Profile = () => {
  const param = useParams().id;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updated, setUpdated] = useState(false);

  const handleUserUpdate = async () => {
    setUpdated(false);
    try {
      const res = await axios.put(
        URL + "/api/users/" + user._id,
        { username, email, password },
        { withCredentials: true }
      );
      // console.log(res.data)
      setUpdated(true);
    } catch (err) {
      console.log(err);
      setUpdated(false);
    }
  };

  const handleUserDelete = async () => {
    try {
      const res = await axios.delete(URL + "/api/users/" + user._id, {
        withCredentials: true,
      });
      setUser(null);
      navigate("/");
      // console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(user)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(URL + "/api/users/" + user._id);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPassword(res.data.password);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, [param]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await axios.get(URL + "/api/posts/user/" + user._id);
        // console.log(res.data)
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserPosts();
  }, [param]);

  return (
    <div>
      <div className="px-8 md:px-[200px] items-start mt-8 flex md:flex-row flex-col-reverse">
        <div className="flex flex-col md:w-[70%] w-full">
          <h1 className="text-xl font-bold mb-4">Your posts:</h1>
          {posts?.map((p)=>(
            <ProfilePost key={p._id} p={p}/>
          ))}
        </div>

        <div className="md:sticky md:top-16 flex justify-start md:justify-end md:w-[30%] w-full items-start md:items-end">
          <div className="flex flex-col space-y-4">
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            <input
              type="text"
              className="outline-none px-4 py-2 text-gray-500"
              onChange={(e)=>setUsername(e.target.value)} value={username}
              placeholder="Your username"
            />
            <input
              type="email"
              className="outline-none px-4 py-2 text-gray-500"
              onChange={(e)=>setEmail(e.target.value)} value={email}
              placeholder="Your email"
            />
            {/* <input
              type="password"
              className="outline-none px-4 py-2 text-gray-500"
              placeholder="Your password"
            /> */}

            <div className="flex items-center space-x-4 mt-8">
              <button onClick={handleUserUpdate}  className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">
                Update
              </button>
              <button  onClick={handleUserDelete} className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">
                Delete
              </button>
            </div>
            {updated && <h3 className="text-green-500 text-sm text-center mt-4">user updated successfully!</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
