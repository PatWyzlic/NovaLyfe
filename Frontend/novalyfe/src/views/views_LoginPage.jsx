import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function LoginPage() {
  let navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
    navigate('/')
  };

  return (
    <div className="login">
      <h1 className="text-center">Nova Lyfe</h1>
      <form onSubmit={handleSubmit} className="col-lg-6 offset-lg-3">
        <h1>Login</h1>
        <div class="form-group">
          <div>
            <label htmlFor="username"><h2>Username</h2></label>
          </div>
          <input type="text" id="username" placeholder="Enter Username" />
        </div>
        <div class="form-group">
          <div>
            <label htmlFor="password"><h2>Password</h2></label>
          </div>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter Password" 
          />
        </div>
        <button type="submit" className="btn btn-secondary">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
