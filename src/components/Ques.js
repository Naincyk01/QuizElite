import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Ques = () => {
  const authStatus = useSelector(
    (store) => store.authenticationDetails.isAuthenticated
  );
  
  if (!authStatus) {
    return <Navigate to="/" replace />;
  }
  return (
   <Outlet/>
  )
}
export default Ques;
