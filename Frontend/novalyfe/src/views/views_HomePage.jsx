import { useContext } from "react";
import NavBar from "../components/NavBar";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [todos, setToDos] = useState([])
  
  function getData(){
    const url = 'http://127.0.0.1:8000/api/todo/'
    axios.get(url)
      .then(response => 
        setToDos(response.data));
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <UserInfo user={user}/>
          {todos.map((todo, index) => {
            return <h1 key={todo.id} todo={todo}> {todo.name}{console.log(todo)} </h1>
          })}
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