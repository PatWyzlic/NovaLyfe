
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import {useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ToDoEditPage from "./views_ToDoEditPage"

export default function ToDoSinglePage({user}){
    let {authTokens, logoutUser} = useContext(AuthContext)
    const { id } = useParams();
    const [todo, setToDo] = useState('')
    console.log(id)
    console.log(todo)

    useEffect(() => {
        getToDo()
    }, []);

    let getToDo = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/todos/${id}`,
        {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        if(response.status === 200){
            setToDo(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
    }

    return (
        <div className="todo text-center" >
            <ul>  
                <li>Name: {todo.name}</li>
                <li>Description: {todo.description}</li>
                <li>Due Date: {todo.due_date}</li>
                <li>Start Date: {todo.start_date}</li>
            </ul>
            <ToDoEditPage name={todo.name} description={todo.description} startdate={todo.start_date} duedate={todo.due_date} id={id}/>
        </div>
    )
}