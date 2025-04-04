// import { createBrowserRouter } from "react-router-dom";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "./Root";
import Form from "./Form";
import User from "./User";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //   errorElement: <ErrorPage />,
      children: [
            {
                path: "/",
                element: <Form></Form>
            },
            {
                path: "/users",
                element: <User></User>,
                loader: ()=>fetch("http://localhost:3200/user")
            }
      ],
    },
  ]);

  export default router;