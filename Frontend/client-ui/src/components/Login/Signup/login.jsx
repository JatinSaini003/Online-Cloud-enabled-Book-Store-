import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import "./login-style.css"
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="l-cont">
    <div className="login-form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username</label>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="login-input"/>
        
        <label>
          Password</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="login-input"/>
        
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="login-options">
        <hr />
        <span>Or login with</span>
        <div className="social-login-icons">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaGoogle />
          </a>
          <a href="#">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;
