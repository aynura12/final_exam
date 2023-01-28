import MainRoot from "../pages/MainRoot"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Shop from "../pages/Shop"
import Add from "../pages/Add/Add"

export const ROUTES = [
    {
        path: "",
        element: <MainRoot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/add",
                element: <Add />
            }
        ]
    }
]