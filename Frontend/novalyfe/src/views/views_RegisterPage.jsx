import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
    <div className="signup">
        <h1 className="text-center">Nova Lyfe</h1>
        <form onSubmit={handleSubmit} className="col-lg-6 offset-lg-3">
        <h1>Registration</h1>
        <hr />
        <div class="form-group">
            <div>
                <label htmlFor="username">Username</label>
            </div>
            <input
                type="text"
                id="username"
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
        </div>
        <div class="form-group">
            <div>
                <label htmlFor="password">Password</label>
            </div>
            <input
                type="password"
                id="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
        </div>
        <div class="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
                type="password"
                id="confirm-password"
                onChange={e => setPassword2(e.target.value)}
                placeholder="Confirm Password"
                required
            />
            <p>{password2 !== password ? "Passwords do not match" : ""}</p>
        </div>
        <button>Register</button>
        </form>
    </div>
    );
}

export default RegisterPage;
