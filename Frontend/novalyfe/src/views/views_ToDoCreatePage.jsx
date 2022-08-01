import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

export default function ToDoCreate({ user }) {
  const [todo, setToDo] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  return (
    <>
        <div className="create-to-do">
            <h1 className="text-center">Create To Do</h1>
            <form onSubmit=""className="col-lg-6 offset-lg-3">
            <div class="form-group">
                <div>
                <label htmlFor="name">
                    <h2>To Do Name</h2>
                </label>
                </div>
                <input type="text" id="name" placeholder="Enter Name" />
            </div>
            <div class="form-group">
                <div>
                <label htmlFor="password">
                    <h2>Description</h2>
                </label>
                </div>
                <input type="text" id="description" placeholder="Enter Description" />
            </div>
            <div class="form-group">
                <div>
                <label htmlFor="startdate">
                    <h2>Start Date</h2>
                </label>
                </div>
                <input type="date" id="startdate" placeholder="Enter Description" />
            </div>
            <div class="form-group">
                <div>
                <label htmlFor="enddate">
                    <h2>End Date</h2>
                </label>
                </div>
                <input type="date" id="enddate"/>
            </div>
            <button type="submit" className="btn btn-secondary">
                Create
            </button>
            </form>
        </div>
        </>
    );
}
