import { useState, useContext, useParams, useCallback } from "react";
import AuthContext from "../context/AuthContext";

export default function ToDoEditPage({ user, duedate, startdate, description, name}) {

    // async function editToDo(){
    //     let response = await fetch(`http://127.0.0.1:8000/api/todos/edit/${id}`, {
    //         method:'PUT',
    //         headers:{
    //             'Content-Type':'application/json',
    //             'Accept': 'application/json',
    //             'Authorization':'Bearer ' + String(authTokens.access)
    //         }
    //     })
    //     let data = await response.json()
        
    //     if(response.status === 200){
    //         response(data)
    //     }else if(response.statusText === 'Unauthorized'){
    //         logoutUser()
    //     }
            
    // }

    
    const [newName, setName] = useState(name)
    const [newDescription, setDescription] = useState(description)
    const [newStartDate, setStartDate] = useState(startdate)
    const [newDueDate, setDueDate] = useState(startdate)

    
    const { editToDo } = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        editToDo(newName, newDescription, newStartDate, newDueDate)
    };

    return (
    <>
        <div className="create-to-do">
            <h1 className="text-center">Edit To Do</h1>
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
                value={name}
                onChange={e => setName(e.target.value)}
                required/>
            </div>
            <div class="form-group">
                <div>
                <label htmlFor="description">
                    <h2>Description</h2>
                </label>
                </div>
                <input type="text" 
                id="description" 
                placeholder={description}
                onChange={e => setDescription(e.target.value)}
                required/>
            </div>
            <h3>Current Start Date: <h4>{duedate}</h4></h3>
            <div class="form-group">
                <div>
                <label htmlFor="startdate">
                    <h2>Start Date</h2>
                </label>
                </div>
                <input 
                type="date" 
                id="startdate"
                onChange={e => setStartDate(e.target.value)}
                required
                />
            </div>
            <h3>Current Due Date: <h4>{duedate}</h4></h3>
            <div class="form-group">
                <div>
                <label htmlFor="duedate">
                    <h2>Due Date</h2>
                </label>
                </div>
                <input 
                type="date" 
                id="duedate"
                onChange={e => {setDueDate(e.target.value)}}
                required
                />
            </div>
                <button type="submit" className="btn btn-secondary">
                    Edit To Do
                </button>
            </form>
        </div>
        </>
    );
}
