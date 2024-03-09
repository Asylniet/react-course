import { createBrowserRouter } from "react-router-dom";
import { RootPage } from "../Root/Page";
import { Error } from "../Root/Error";
import { UserPage } from "../User/Page";
import { HomePage } from "../Home/Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage /> ,
      },
      {
        path: "user/:id",
        element: <UserPage />,
      }
    ]
  },
]);