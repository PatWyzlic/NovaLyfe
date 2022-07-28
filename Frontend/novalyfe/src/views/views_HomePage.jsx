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
          <table className="add-border">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Start</th>
                  <th scope="col">Due</th>
                </tr>
              </thead>
              <tbody>
          {todos.map((todo, index) => {
            return <tr key={todo.id} todo={todo} >  
              <td scope="col">{todo.name} </td>
              <td scope="col">{todo.description} </td>
              <td scope="col">{todo.start_date} </td>
              <td scope="col">{todo.due_date} </td>
              {console.log(todo)} 
            </tr>
          })}
            </tbody>
          </table>
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