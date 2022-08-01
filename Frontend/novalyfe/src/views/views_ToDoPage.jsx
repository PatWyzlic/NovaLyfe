
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

export default function ToDoPage({user}){
    const [todos, setToDos] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(() => {
        getToDos()
    }, []);

    let getToDos = async() =>{
        let response = await fetch('http://127.0.0.1:8000/api/todos', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.status === 200){
            setToDos(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
        
    }

    return(
        <>
            {console.log(todos)}
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
                return <tr key={todo.id} todo={todo.id} >  
                            {console.log(todo)}
                            <td scope="col">{todo.name} </td>
                            <td scope="col">{todo.description} </td>
                            <td scope="col">{todo.start_date} </td>
                            <td scope="col">{todo.due_date} </td>
                            <button><a href={`todos/${todo.id}`}>View</a></button>
                            {console.log(todo)}
                            {console.log(user)}
                        </tr>
                    }
            )
            }
            </tbody>
            </table>
            <button><a href="/todos/create/">Add To Do</a></button>
        </>
    )
}