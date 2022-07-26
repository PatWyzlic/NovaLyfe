import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function NavBar(){
    const { user, logoutUser } = useContext(AuthContext);
    return(
        <nav className="navbar navbar-expand-lg bg-light ">
            <div>
                <div>
                {user ? (
                <>
                    <a className="navbar-brand" href="/"><h1>NovaLyfe</h1></a>
                    <Link to="/protected"><h1>Protected</h1></Link>
                    <button onClick={logoutUser}>Logout</button>
                </> 
                ) : (
                    <>
                        <a className="navbar-brand" href="/"><h1>NovaLyfe</h1></a>
                        <Link to="/login"><h1 className="navbar-nav me-auto mb-2 mb-lg-0">Login</h1></Link>
                        <Link to="/register"><h1 className="navbar-nav me-auto mb-2 mb-lg-0">Register</h1></Link>
                    </>
                )}
                </div>
            </div>
        </nav>
    )
}

