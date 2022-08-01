
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

export default function ToDoPage({user}){
    const [routines, setRoutines] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(() => {
        getRoutines()
    }, []);


    let getRoutines = async() =>{
        let response = await fetch('http://127.0.0.1:8000/api/routines', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.status === 200){
            setRoutines(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
        
    }

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
            {routines.map((routine, index) => {
                if(routine.profile !== 'hi'){
                return <tr key={routine.routine_id} todo={routine.routine_id} >  
                            {console.log(routine)}
                            <td scope="col">{routine.name} </td>
                            <td scope="col">{routine.description} </td>
                            <td scope="col">{routine.start_date} </td>
                            <td scope="col">{routine.due_date} </td>
                            {console.log(routine)}
                            {console.log(user)}
                        </tr>
                    }
                }
            )
            }
            </tbody>
            </table>
            <button><a href="/routines">Add Routine</a></button>
        </>
    )
}