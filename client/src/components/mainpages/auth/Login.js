import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GlobalState } from "../../../GlobalState";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.userAPI.callback;

  const [user, setUser] = useState(initialState);
  const { email, password } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", { email, password });
      alert(res.data.msg);

      localStorage.setItem("firstLogin", true);
      setUser(initialState);

      setCallback(!callback);
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const responseGoogle = async (response) => {
    try {
      const res = await axios.post("/user/google_login", {
        tokenId: response.tokenId,
      });

      alert(res.data.msg);

      localStorage.setItem("firstLogin", true);
      setUser(initialState);

      setCallback(!callback);
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const responseFacebook = async (response) => {
    try {
      const { accessToken, userID } = response;
      const res = await axios.post("/user/facebook_login", {
        accessToken,
        userID,
      });

      alert(res.data.msg);

      localStorage.setItem("firstLogin", true);
      
      setUser(initialState);

      setCallback(!callback);
      window.location.href = "/";

    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <button className="btn btn-primary login-btn">Login</button>
          <div className="forgotten">
            <Link to="/forgot">Forgotten Password </Link>
            <Link to="/register">Register</Link>
          </div>
          <p className="social-text">Or,</p>
          <div className="social-button">
            <GoogleLogin className="google"
              clientId="218673844652-er6rkq1lau72vvur0rv216tnq14rrkvb.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <FacebookLogin 
              appId="1117135555689929"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
