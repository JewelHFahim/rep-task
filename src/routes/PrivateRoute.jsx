import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useGetUsersQuery } from "../redux/features/api/apiSlice";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { data: users, isLoading, isError } = useGetUsersQuery();

  const { phone, password, role } = useSelector((state) => state.user);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return <Navigate to="/error" />;
  }

  const existingUser = users?.data?.find((user) => user?.phone === phone && user?.password === password && user?.role === role);

  if (existingUser) {
    return children;
  } 
  return <Navigate to="/login" state={{ from: location }} replace />;
  
};

export default PrivateRouter;
