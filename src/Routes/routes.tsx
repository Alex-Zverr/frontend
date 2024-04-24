import { createBrowserRouter } from "react-router-dom"
import About from "../Pages/About";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Contacts from "../Pages/Contacts";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contacts",
                element: <Contacts />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/registration",
                element: <Registration />,
            },
        ]
    },
]);