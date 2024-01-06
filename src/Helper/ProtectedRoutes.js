import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const ProtectedRoute = ({ children, type }) => {

    const { tokenvalue, utype } = useSelector((state) => state.login.user)

    if (!tokenvalue) {
        return <Navigate to="/" replace />;
    } else {
        if (utype === type) {
            return children;
        } else {
            return <Navigate to="/login" replace />;
        }
    }


};