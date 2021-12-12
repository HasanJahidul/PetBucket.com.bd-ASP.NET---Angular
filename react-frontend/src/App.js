import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/css/register.css';
import './App.css'
import './assets/css/Sidebar.css';
import './assets/css/ServiceForm.css';
import './assets/css/Site.css';
import './assets/css/Table.css';
import 'mdbreact/dist/css/mdb.css';



import Register from './components/auth/Register';
import Login from './components/auth/Login';
import LandingPage from './components/LandingPage';
import CustomerDashboard from './components/customer/Dashboard';
import PetService from "./components/customer/PetService";
import Profile from "./components/customer/Profile";

//-------------ADMIN--------------------

import AdminDashboard from "./components/admin/AdminDashboard";
import AddCustomer from "./components/admin/AddCustomer";
import AdminDetails from "./components/admin/AdminDetails";


function App() {
  return (
    <> 
    <Router>
    <Switch>
      {/* Public Routes */}
    <Route exact path="/" >
      <LandingPage />
    </Route>  
    <Route
      exact path="/register"
        children=
        {
          <Register
            title="sign up"
            buttonName="register"
          />
        }
    ></Route>

    <Route exact path="/login" >
      <Login />
    </Route>

     {/* Customer Routes */}
    <Route exact path="/CustomerDashboard" >
      <CustomerDashboard />
    </Route>

    <Route
      exact path="/customer/edit-profile"
        children=
        {
          <Profile
            title="Edit Profile"
            buttonName="save"
          />
        }
    ></Route>

  {/* Pet services for customer */}
    <Route exact path="/PetService/DogWalking"
        children=
        {
          <PetService
            serviceName="Dog Walking"
            buttonName="Book Service"
          />
        }
      ></Route>
    <Route exact path="/PetService/PetDayCare"
        children=
        {
          <PetService
            serviceName="Pet Day Care"
            buttonName="Book Service"
          />
        }
      ></Route>
      <Route exact path="/PetService/PetTaxi"
        children=
        {
          <PetService
            serviceName="Pet Taxi"
            buttonName="Book Service"
          />
        }
      ></Route>
      <Route exact path="/PetService/PetSitting"
        children=
        {
          <PetService
            serviceName="Pet Sitting"
            buttonName="Book Service"
          />
        }
      ></Route>
      <Route exact path="/PetService/PetGromming"
        children=
        {
          <PetService
            serviceName="Pet Gromming"
            buttonName="Book Service"
          />
        }
      ></Route>
      <Route exact path="/PetService/PetTraining"
        children=
        {
          <PetService
            serviceName="Pet Training"
            buttonName="Book Service"
          />
        }
      ></Route>
    {/* =========== admin=================*/}
    <Route exact path="/PetService/dog-walking"
            children={
              <PetService
                serviceName="Dog Walking"
                buttonName="Book Service"
              />
            }
          ></Route>



    {/* ADMIN */}
    <Route exact path="/AdminDashboard" >
      <AdminDashboard />
    </Route>
    <Route exact path="/AddCustomer" >
      <AddCustomer />
    </Route>
    <Route exact path="/AdminDetails" >
      <AdminDetails />
    </Route>
    
    </Switch>

    </Router> 
    </>
  );
}

export default App;
