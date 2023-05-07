import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import "./signup-style.css"
import axios from 'axios';
function SignupForm() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password,setC_password] = useState('');
  const [username,setUsername] = useState('')
    const[click,setClick] = useState(false)
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
      "username":username,
      "first_name":firstName,
      "Last_name":lastName,
      "email":email,
      "password":password
      }
      const response = await axios.post(`http://${process.env.REACT_APP_API_ADDRESS}:5000/user`,data)
      console.log(response.data)
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email},Username: ${username}, Password: ${password}`);
    navigate('/')
  };
  const handleClick = ()=>{
    setClick(!click)
  }
  return (
    <div className="signup-form-container">
      <h1 className='s-h1'>Sign Up</h1>
      <form onSubmit={handleSubmit} className="s-form">
        
        {click?<>
          <label className='s-label'>
          Username</label>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <label className='s-label'>
          Password</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <label className='s-label'>
          Confirm Password</label>
          <input type="password" value={c_password} onChange={(event) => setC_password(event.target.value)} /></>:<><label className='s-label'>
          First Name</label>
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        
        <label className='s-label'>
          Last Name</label>
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        
        <label className='s-label'>
          Email</label >
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} /></>}
        {click?<><button type="submit" className="signup-button
        ">Sign Up</button>
        {click?<div className="previous-btn" onClick={handleClick}>
            Previous
        </div>:<></>}
        
        
        
        </>:<><button className='signup-button' onClick={handleClick}>Next</button></>}
        
        
      </form>
      <div className="login-options">
        <hr />
        <span>Or Signup with</span>
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
      <div className="login-p">
        Already Registered? <Link to='/login' className='link-to-login'>
            LogIn
        </Link>
      </div>
    </div>
  );
}

export default SignupForm;
