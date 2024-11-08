import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <img
            className="comsats-logo"
            src="https://imgs.search.brave.com/SBOpVuGN6vDR28kT7SNNHeejceql347oyxuxd5gzIm0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcnlz/dGFscG5nLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/Mi9DT01TQVRTLVVu/aXZlcnNpdHktbG9n/by5wbmc"
            alt="COMSATS Logo"
          />
          <h1>Welcome to COMSATS Hub</h1>
          <p>
            "Connect with your peers, collaborate on projects, and stay updated
            with university events. Join our community and enhance your
            university experience!"
          </p>
          <span>Don't have an account? Register below.</span>
           <Link to="/register">

           <button className="register-btn">Register</button>

           </Link>

        

        </div>

        <div className="right">
          <h1>Login</h1>
          <form>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button className="login-btn">Log in</button>
          </form>
          <div className="circle small"></div>
          <div className="circle large"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
