// publicRouter.js
import Layout from "../components/Layout/Layout";
import About from "../pages/About";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "../components/PrivateRoute.jsx/PrivateRoute";

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
                element: <PrivateRoute element={<SignIn />} />
            },
            {
                path: "/sign-up",
                element: <PrivateRoute element={<SignUp />} />
            },
        ]
    }
];

export default publicRouter;
