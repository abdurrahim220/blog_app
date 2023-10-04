import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "../component/Loading/Loading";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PostDetails from "../pages/PostDetails/PostDetails";

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
        path:'/postDetails/:id',
        element:<PostDetails/>
      },
    ],
  }
]);

export default router;
