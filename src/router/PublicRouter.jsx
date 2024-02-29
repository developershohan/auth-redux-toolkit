import About from "../pages/About";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const publicRouter = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    },

]

export default publicRouter