import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "../pages/Home/Page";
import { PostPage } from "../pages/Post/[id]/Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  }
]);