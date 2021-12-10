import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Icons from './components/Icons';
import Tables from "./components/Tables";
import Profile from "./components/customer/Profile";
import Index from './components/Index2';
import Auth from './components/auth/Auth';


function App() {
  return (
    <> 
    <Router>
    <Switch>  
    <Route exact path="/" >
      <Register />
    </Route>
    <Route exact path="/login" >
      <Login />
    </Route>
    <Route exact path="/icons" >
      <Icons />
    </Route>
    <Route exact path="/tables" >
      <Tables />
    </Route>
    <Route exact path="/profile" >
      <Profile />
    </Route>
    <Route exact path="/index" >
      <Index />
    </Route>
    <Route exact path="/auth" >
      <Auth />
    </Route>
    </Switch>

    </Router> 
    </>
  );
}

export default App;
