import PropTypes from "prop-types";

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useAuth();

  const location = useLocation();
  if (isLoading) {
    return <p>Loading ... </p>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
