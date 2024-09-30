import React from 'react';
import '../styles/Login.css';
import { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [savedDetail, setSavedDetail] = useState({
    username: '',
    password: '',
  })

  function handleInputChange(event) {
    const {name, value} = event.target;
    setSavedDetail((previous) => {
      return {...previous, [name]: value};
    })
    // setSavedDetail({
    //   username: '',
    //   password: '',
    // })
  }

  function handleSubmission(event) {
    event.preventDefault();
    console.log(savedDetail);
    localStorage.setItem('savedDetails', JSON.stringify(savedDetail))
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  
  const savedDetails = {
    userame: savedDetail.username,
    password: savedDetail.password,
  }
  console.log(savedDetails);
  return (
    <div className='login-form'>
      <form action="" className="login">
      <p>Log In</p>
        <input type="text" id="username" 
        onChange={handleInputChange}
        value={savedDetail.username}
        name="username" 
        placeholder='Username' required/>
        <div className="password">
        <input type= {showPassword ? "text" : "password"} 
        id="password" 
        onChange={handleInputChange}
        value={savedDetail.password}
        placeholder="Password" 
        name="password" required/>
        <span class="material-symbols-outlined" onClick={handleShowPassword}>visibility</span>
    </div>
        <button type="submit" onClick={handleSubmission}>Login</button>
        <p className='login-intro'>Forgot your password? <a href="">Reset Password</a></p>
        <div className="other-sign-in">
            <h3>Other ways to sign in</h3>
            <div className="google">
            <span class="material-symbols-outlined">schedule</span>        
            <p className=''>Login with google</p>
            </div>
            <div className="facebook">
            <span class="material-symbols-outlined">schedule</span>        
            <p>Login with facebook</p>
            </div>
        </div>
        <p className='register'>Not A Register User? <a href="">Create Account</a></p>
      </form>
      <div className="form-stars">
        <div className="item">
        <span class="material-symbols-outlined">star</span>
        <p>Take part in fan debate by leaving comments on matches and articles</p>
        </div>
        <div className="item">
        <span class="material-symbols-outlined">star</span>
        <p>Take part in fan debate by leaving comments on matches and articles</p>
        </div>
        <div className="item">
        <span class="material-symbols-outlined">star</span>
        <p>Take part in fan debate by leaving comments on matches and articles</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
