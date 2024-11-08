import React from 'react'; // Make sure to import React
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./register.scss";

const Register = () => {
  return (
    <div className="register"> {/* Change class to 'register' for consistency */}
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
          <span>Do you have an account? Login to the world of Comsats.</span>
          <Link to="/login">
            <button className="register-btn">Login</button> {/* Changed class to 'register-btn' */}
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="User Name" />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button className="login-btn">Register</button>
          </form>
          <div className="circle small"></div>
          <div className="circle large"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
