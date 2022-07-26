import { useContext } from "react";
import NavBar from "../components/NavBar";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ToDoPage from "./views_ToDoPage";
import WeatherPage from "./views_WeatherPage";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="main-baground">
      {user ? (
        <>
          <UserInfo user={user}/>
          <ToDoPage user={user}/>
          <WeatherPage />
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