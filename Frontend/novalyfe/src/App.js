import React from "react";
import axios from "axios";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/UserInfo";
import ProtectedPage from "./views/ProtectedPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
  
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Routes>
            <PrivateRoute component={ProtectedPage} path="/protected" exact />
            <Route component={LoginPage} path="/login" />
            <Route component={RegisterPage} path="/register" />
            <Route component={Home} path="/" />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}


export default App;