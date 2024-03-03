// PrivateRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const { user } = useSelector((state) => state.user);
console.log(user);

  if (user ) {
    // If user is logged in, redirect them to the profile page
    return <Navigate to="/profile" />;
  } else {
    // If user is not logged in, render the element (sign-in or sign-up page)
    return element;
  }
};

export default PrivateRoute;
