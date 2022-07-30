
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function ToDoPage({user}){
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


    return(
        <>
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
            <button>Add to do</button>
        </>
    )
}