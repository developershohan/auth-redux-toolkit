import { children } from "react";
import Layout from "../components/Layout/Layout";
import About from "../pages/About";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const publicRouter = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/sign-in",
                element: <SignIn />
            },
            {
                path: "/sign-up",
                element: <SignUp />
            },
        ]
    }

]

export default publicRouter