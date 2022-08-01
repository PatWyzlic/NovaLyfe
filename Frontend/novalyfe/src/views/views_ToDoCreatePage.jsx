import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

export default function ToDoCreate({ user }) {
    const [todo, setToDo] = useState({
        name: '',
        description: '',
        start_date: '',
        due_date: '',
    });

    const handleChange = (evt) => {
        setToDo({ ...todo, [evt.target.name]: evt.target.value});
    };

    let { authTokens, logoutUser } = useContext(AuthContext);

    const handleSubmit = async (evt) => {
        let createToDo = async(name, description, start_date, end_date) =>{
            let response = await fetch('http://127.0.0.1:8000/api/todos/create', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Accept': 'application/json',
                    'Authorization':'Bearer ' + String(authTokens.access)
                },
                body: JSON.stringify({
                    name,
                    description,
                    start_date,
                    end_date
                })
            })
                let data = await response.json()
        
                if(response.status === 200){
                    setToDo(data)
                }else if(response.statusText === 'Unauthorized'){
                    logoutUser()
                }
            }
        

    }

    return (
    <>
        <div className="create-to-do">
            <h1 className="text-center">Create To Do</h1>
            <form onSubmit={handleSubmit} className="col-lg-6 offset-lg-3"
            autoComplete="off">
            <div class="form-group">
                <div>
                <label htmlFor="name">
                    <h2>To Do Name</h2>
                </label>
                </div>
                <input 
                type="text" 
                id="name" 
                placeholder="Enter Name" 
                value={todo.name}
                onChange={handleChange}/>
            </div>
            <div class="form-group">
                <div>
                <label htmlFor="description">
                    <h2>Description</h2>
                </label>
                </div>
                <input type="text" 
                id="description" 
                placeholder="Enter Description" 
                value={todo.description}
                onChange={handleChange}/>
            </div>
            <div class="form-group">
                <div>
                <label htmlFor="start_date">
                    <h2>Start Date</h2>
                </label>
                </div>
                <input 
                type="date" 
                id="start_date"
                value={todo.name}
                onChange={handleChange}/>
            </div>
            <div class="form-group">
                <div>
                <label htmlFor="end_date">
                    <h2>End Date</h2>
                </label>
                </div>
                <input 
                type="date" 
                id="end_date"
                value={todo.end_date}
                onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-secondary">
                Create
            </button>
            </form>
        </div>
        </>
    );
}
