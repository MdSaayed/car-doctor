import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return;
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/signin'}></Navigate>
};

export default PrivateRout;