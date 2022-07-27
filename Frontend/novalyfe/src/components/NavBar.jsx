import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../components/NavBar"
import Nav from 'react-bootstrap/Nav';

export default function NavBar(){
    const { user, logoutUser } = useContext(AuthContext);
    return(
        <nav className="navbar navbar-expand-lg text-dark justify-content-center">
            <div id="navbarNav">
                {user ? (
                    <ul className="navbar-nav">
                        <li className="nav-link">
                            <button onClick={logoutUser} className="navbar-item active">Logout</button>
                        </li>
                    </ul>       
                ) : (
                    <ul className="navbar-nav" >
                        <li className="nav-link">
                            <Link to="/login"> 
                                <h1     className="text-secondary">
                                    Login
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/register"> 
                                <h1 className="text-secondary">Register
                                </h1>
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

