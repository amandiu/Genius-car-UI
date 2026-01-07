import { Navigate } from "react-router-dom";

// user = { isLoggedIn: true, role: "user" | "mechanic" | "admin" }
// allowedRoles = array of roles
const ProtectedRoute = ({ children, user, allowedRoles }) => {
  if (!user?.isLoggedIn) return <Navigate to="/" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />;
  return children;
};


export default ProtectedRoute; // ✅ Must have default export
