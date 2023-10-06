import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "../component/Loading/Loading";
import Login from "../pages/Login/Login";
import PostDetails from "../pages/PostDetails/PostDetails";
import CreatePost from "../pages/CreatePost/CreatePost";
import EditPost from "../pages/EditPost/EditPost";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";

const Home = React.lazy(() => import("../component/Home/Home"));

const Main = React.lazy(() => import("../Layout/Main"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading/>} >
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback="Loading......">
            <Home />
          </Suspense>
        )
      },
      {
        path:'/login',
        element:<Login/>
      },
     
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/write',
        element:<CreatePost/>
      },
      {
        path:'/postDetails/:id',
        element:<PostDetails/>
      },
      {
        path:'/edit/:id',
        element:<EditPost/>
      },
    ],
  }
]);

export default router;
