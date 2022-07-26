import { useContext } from "react";
import NavBar from "../components/NavBar";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      {user ? (
        <>
          <UserInfo user={user}/>
        </>
      ) : (
        <>
          <h1>Please login </h1>
        </>
      )
    }
    </section>
  );
};

export default Home;