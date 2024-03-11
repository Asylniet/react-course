import { createBrowserRouter } from "react-router-dom";
import { Error } from "../components/Root/Error";
import { RootPage } from "../components/Root/RootPage";
import { Models } from "../components/pages/Models";
import { ModelsPage } from "../components/pages/ModelsPage";
import { Almaty } from "../components/pages/Almaty";
import { Astana } from "../components/pages/Astana";
import { IndexPage } from "../components/pages/IndexPage";

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
                path: "dealers/almaty",
                element: <Almaty/>,
            },
            {
                path: "dealers/astana",
                element: <Astana/>,
            }
        ]
    }
])