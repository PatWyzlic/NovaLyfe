import React, {Component} from "react";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './views/views_HomePage'
import NavBar from "./components/NavBar"
import LoginPage from "./views/views_LoginPage";
import UserInfo from "./components/UserInfo";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import ProtectedPage from "./utils/utils_ProtectedPage";
import RegisterPage from "./views/views_RegisterPage";

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/protected" element={<ProtectedPage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </AuthProvider>
    );
  }
}
export default App;