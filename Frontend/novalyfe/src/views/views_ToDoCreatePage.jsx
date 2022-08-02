import { useState, useContext, useCallback } from "react";
import AuthContext from "../context/AuthContext";


export default function ToDoCreate({ user}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startdate, setStartDate] = useState("");
    const [duedate, setDueDate] = useState("");
    
    const { createToDo } = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        createToDo(name, description, startdate, duedate)
    };

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
                placeholder="Enter Description" 
                onChange={e => setDescription(e.target.value)}
                required/>
            </div>
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
            <div class="form-group">
                <div>
                <label htmlFor="duedate">
                    <h2>Due Date</h2>
                </label>
                </div>
                <input 
                type="date" 
                id="duedate"
                onChange={e => setDueDate(e.target.value)}
                required
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
