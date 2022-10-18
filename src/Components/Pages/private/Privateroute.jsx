import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Privateroute({ children }) {
    const { user } = useAuth();
    const location = useLocation();
    if (user && user?.uid) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace />;
}

export default Privateroute;
