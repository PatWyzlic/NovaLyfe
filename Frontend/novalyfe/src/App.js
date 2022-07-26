import React, {Component} from "react";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './views/HomePage'
import NavBar from "./components/NavBar"
import LoginPage from "./views/LoginPage";
import UserInfo from "./components/UserInfo";
import AuthContext from "./context/AuthContext";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </>
    );
  }
}
export default App;