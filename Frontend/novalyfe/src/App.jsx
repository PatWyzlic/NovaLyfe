import React, {Component} from "react";
import { useState, useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './views/views_HomePage'
import NavBar from "./components/NavBar"
import LoginPage from "./views/views_LoginPage";
import UserInfo from "./components/UserInfo";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./views/views_RegisterPage";
import ToDoCreate from "./views/views_ToDoCreatePage";
import ToDoPage from "./views/views_ToDoPage";
import ToDoSinglePage from "./views/ToDoSinglePage";
import WeatherPage from "./views/views_WeatherPage"
import RoutinePage from "./views/views_RoutinePage"
import ToDoEditPage from "./views/views_ToDoEditPage"
import DeleteView from "./views/DeleteView"

function App() {
    return (
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/todos/" element={<ToDoPage/>}/>
          <Route path="/todos/:id/" element={<ToDoSinglePage/>} />
          <Route path="/todos/delete/:id/" element={<DeleteView/>} />
          <Route path="/todos/edit/:id/" element={<ToDoEditPage/>}/>
          <Route path="/todos/create/" element={<ToDoCreate/>}/>
          <Route path="/routines/" element={<RoutinePage/>}/>
          <Route path="/weatherpage/" element={<WeatherPage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register/" element={<RegisterPage/>}/>
          <Route path="/login/" element={<LoginPage/>}/>
        </Routes>
      </AuthProvider>
    );
}
export default App;