// PrivateRoute.jsx
import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const LoggedOutRedirect = () => {
  const { loginState, user } = useSelector((state) => state.user);
console.log(user);

return loginState ? <Navigate to="/profile"/>  :  (<>        <Header />
<Outlet />
<Footer /></>) 

};

export default LoggedOutRedirect;
