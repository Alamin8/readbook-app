import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const initialState = {
  name: '',
  email: '',
  password: '',
}

const Register = () => {
  const [user, setUser] = useState(initialState)

  const {name, email, password} = user

  const onChangeInput= (e)=>{
    const {name, value}=e.target;
    setUser({...user, [name]:value})
  }

  const registerSubmit =async (e)=>{
    try {
      await axios.post('/user/register', {name, email, password})
    } catch (err) {
      alert(err.response.data.msg)
    }
  }


  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={registerSubmit}>
          <h2>Register</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input 
              type="text" 
              placeholder="Name" 
              name="name"
              required
              value={name}
              onChange={onChangeInput}
            />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input 
              type="email" 
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={onChangeInput} 
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input 
              type="password" 
              placeholder="Password"
              name="password"
              required
              value={password}
              autocomplete="on"
              onChange={onChangeInput}
            />
          </div>
          <button type="submit" className="btn btn-primary login-btn">Register</button>
          <div className="forgotten">
            <p>Already have an Account?</p>
            <Link to="/login"> Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
