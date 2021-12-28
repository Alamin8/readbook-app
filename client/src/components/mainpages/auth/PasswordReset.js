import React, { useState } from "react";
import {useParams} from 'react-router-dom'
import axios from 'axios'

const PasswordReset = () => {
    const [password, setPassword]=useState('')
    const {token}= useParams()
    console.log(password, token);
    const ResetPassword = async () =>{
      try {
        await axios.post('/user/reset', {password},{
            headers:{Authorization:token}
        })
        alert('Password Reset, Now Login')
        window.location.href='/login'
      } catch (err) {
        alert(err.response.data.msg)
      }
    }
    return (
        <div className="container">
      <div className="form-container">
        <form className="form">
          <h2>Reset Your Password</h2>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="password" placeholder="New Password" name="password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button onClick={ResetPassword} className="btn btn-primary login-btn">Confirm Password</button>
        </form>
      </div>
    </div>
    );
};

export default PasswordReset;