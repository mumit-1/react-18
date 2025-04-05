// import { createBrowserRouter } from "react-router-dom";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "./Root";
import Form from "./Form";
import User from "./User";
import Update from "./Update";
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
            },
            {
                path: "/user/:id",
                element: <Update></Update>,
                loader: ({params})=>fetch(`http://localhost:3200/user/${params.id}`)
            }
      ],
    },
  ]);

  export default router;