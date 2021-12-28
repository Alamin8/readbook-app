import React, { useState } from "react";
import axios from 'axios'
const Forgot = () => {
  const [email, setEmail]=useState('')
  const ForgotPassword = async () =>{
    try {
      await axios.post('/user/forgot', {email})
    } catch (err) {
      alert(err.response.data.msg)
    }
  }
  return (
    <div className="container">
      <div className="form-container">
        <form className="form">
          <h2>Forgot Password</h2>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" name="email" onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <button onClick={ForgotPassword} className="btn btn-primary login-btn">Verify your email</button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
