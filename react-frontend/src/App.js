import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/css/register.css';
import './App.css'
import './assets/css/Sidebar.css';
import './assets/css/ServiceForm.css';
import './assets/css/Site.css';
import './assets/css/Table.css';



import Register from './components/auth/Register';
import Login from './components/auth/Login';
import LandingPage from './components/LandingPage';
import CustomerDashboard from './components/customer/Dashboard';
import PetService from "./components/customer/PetService";


function App() {
  return (
    <> 
    <Router>
    <Switch>
    <Route exact path="/" >
      <LandingPage />
    </Route>  
    <Route exact path="/register" >
      <Register />
    </Route>
    <Route exact path="/login" >
      <Login />
    </Route>
    <Route exact path="/CustomerDashboard" >
      <CustomerDashboard />
    </Route>
    <Route exact path="/PetService/dog-walking"
            children={
              <PetService
                serviceName="Dog Walking"
                buttonName="Book Service"
              />
            }
          ></Route>
    
    </Switch>

    </Router> 
    </>
  );
}

export default App;
