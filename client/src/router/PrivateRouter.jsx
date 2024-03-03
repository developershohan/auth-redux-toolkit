// privateRouter.js
import Layout from "../components/Layout/Layout";
import Profile from "../pages/Profile";
import PrivateRoute from "../components/PrivateRoute.jsx/PrivateRoute";

const privateRouter = [
    {
        element: <Layout/>,
        children:[
            {
                path: "/profile",
                element: <PrivateRoute element={<Profile />} />
            }
        ]
    }
];

export default privateRouter;
