
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { Navigate, useParams } from "react-router-dom";

export default function DeleteView({user}){
    let {authTokens, logoutUser} = useContext(AuthContext)
    const {id} = useParams()

    useEffect(() => {
        deleteToDos()
    }, []);

    let deleteToDos = async() =>{
        let response = await fetch(`http://127.0.0.1:8000/api/todos/delete/${id}`, {
            method:'DELETE',
            headers:{
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        if(response.status === 200){
            <Navigate to="/" /> 
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }else{
            <Navigate to="/" /> 
        }
            
        
    }

    return(
        <>
            <Navigate to="/" /> 
            Deletion in progress
        </>
    )
}