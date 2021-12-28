import React, {useContext}  from "react";
import { Switch, Route } from "react-router-dom";
import MainBody from './MainBody/MainBody'
import Register from "./auth/Register";
import Login from "./auth/Login";
import Forgot from "./auth/Forgot";
import NotFound from "./utils/NotFound";
import ActivationEmail from "./auth/ActivationEmail";
import { GlobalState } from "../../GlobalState";
import PasswordReset from "./auth/PasswordReset";

const Pages = () => {
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin
  
  return (
    <Switch>
      <Route path="/" exact component={isLogged? MainBody : Login} />
      <Route path="/register" exact component={!isLogged ? Register : NotFound } />
      <Route path="/login" exact component={!isLogged ? Login : NotFound} />

      <Route path="/forgot" exact component={!isLogged ? Forgot : NotFound} />
      <Route path="/user/reset/:token" exact component={!isLogged ? PasswordReset : NotFound} />


      <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />


      <Route path="*" exact component={NotFound} />
    </Switch>
  );
};

export default Pages;