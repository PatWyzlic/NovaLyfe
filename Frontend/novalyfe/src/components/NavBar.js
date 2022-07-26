import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function NavBar(){
    return(
        <div>
            <nav>
                <Link to="/protected"><h1>ProtectedPage</h1></Link>
                <a><h1>NovaLyfe</h1></a>
            </nav>
        </div>
    )
}

