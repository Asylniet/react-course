import { createBrowserRouter } from "react-router-dom";
import { Error } from "../pages/Root/Error";
import { RootPage } from "../pages/Root/RootPage";
import { Models } from "../pages/Models";
import { ModelsPage } from "../pages/ModelsPage";
import { Almaty } from "../pages/Almaty";
import { Astana } from "../pages/Astana";
import { IndexPage } from "../pages/IndexPage";
import { API } from "../pages/API";
import { Collaboration } from "../pages/Collaboration";
import { LoginPage } from "../pages/LoginPage";
import { PostPage } from "../pages/Post/[id]/PostPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage/>,
        errorElement: <Error/>,
        children: [
            {
                path:"/",
                element: <IndexPage/>
            },
            {
                path: "models/",
                element: <ModelsPage/>,
            },
            {
                path: "models/:id",
                element: <Models/>,
            },
            {
                path: 'collaboration/',
                element: <Collaboration/>
            },
            {
                path: "dealers/almaty",
                element: <Almaty/>,
            },
            {
                path: "dealers/astana",
                element: <Astana/>,
            },
            {
                path: "api",
                element: <API/>
            },
            {
              path: "post/:id",
              element: <PostPage />,
            },
            {
                path: "login/",
                element: <LoginPage/>
            },
        ]
    }
])