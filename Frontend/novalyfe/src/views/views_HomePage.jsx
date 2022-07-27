import { useContext } from "react";
import NavBar from "../components/NavBar";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <>
          <UserInfo user={user}/>
        </>
      ) : (
        <>
          <h1>Please login </h1>
          <Navigate to="/login" /> 
        </>
      )
    }
    </div>
  );
};

export default Home;