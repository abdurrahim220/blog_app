import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "../component/Loading/Loading";

const Home = React.lazy(() => import("../component/Home/Home"));
const Main = React.lazy(() => import("../Layout/Main"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading/>} >
        <Main />,
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback="Loading......">
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
