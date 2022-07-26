import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-light ">
            <a className="navbar-brand" href="/"><h1>NovaLyfe</h1></a>
            <Link to="/protected"><h1 className="navbar-nav me-auto mb-2 mb-lg-0 ">Protected</h1></Link>
            <Link to="/login"><h1 className="navbar-nav me-auto mb-2 mb-lg-0">Login</h1></Link>
            <Link to="/register"><h1 className="navbar-nav me-auto mb-2 mb-lg-0">Register</h1></Link>
        </nav>
    )
}

