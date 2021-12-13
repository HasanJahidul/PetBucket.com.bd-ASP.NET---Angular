import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {ToastContainer,toast,Zoom} from 'react-toastify';
  const Register = (props) => {
    const history = useHistory();
    const [userData, setUserData] = useState({
      name: '',
      email: '',
      password: '',
      address: '',
      nid: '',
      phone: ''
      
  });
    // setting the state of the form
    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setUserData({  ...userData,[name]: [value]})
      console.log(name, value);
      
  }
  const register = async (e) => {
    //send the request to the server to book the service.
    e.preventDefault();
    const name = userData.name.toString();
    const phone = userData.phone.toString();
    const address = userData.address.toString();
    const email = userData.email.toString();
    const nid = userData.nid.toString();
    const password =userData.password.toString();
    const confirmpassword = userData.confirmpassword.toString();
    
    const res = await axios.post('https://localhost:44398/api/Register',
    {name:name, phone: phone, address: address,
      email: email,nid: nid, 
      password: password});
    if(res.status === 200){
        toast.success("Registration Successful");
        
        
        setUserData({ 
          name: '',
          email: '',
          password: '',
          address: '',
          nid: '',
          phone: '' })
    }if(res.status === 204){
      toast.success("Registration Successful");
      
      
      setUserData({ 
        name: '',
        email: '',
        password: '',
        address: '',
        nid: '',
        phone: '' })
        setTimeout(() => { history.push('/login'); }, 2000);
  }
    else{
        toast.error("An error occured to while registering");
    }

    }

    return (
      <>
      <ToastContainer position="top-right" theme='dark' transition={Zoom} />
        <div class="reg-body">
        <div class="reg-container">
        <div class="title">REGISTER</div>
        <p></p>
        <div class="content">
            <form onSubmit={register}>
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Full Name</span>
                        <input name="name" type="text" placeholder="Enter your Name" onChange={handleInputChange}  required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Email</span>
                        <input name="email" type="text" placeholder="Enter your email" onChange={handleInputChange} required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Phone Number</span>
                        <input name="phone" type="text" placeholder="Enter your number"onChange={handleInputChange} required/>
                    </div>

                    <div class="input-box">
                        <span class="details">NID Number</span>
                        <input name="nid" type="text" placeholder="Enter your NID number"onChange={handleInputChange} required/>
                    </div>

                    <div class="input-box">
                        <span class="details">Address</span>
                        <input name="address" type="text" placeholder="Enter your address"onChange={handleInputChange} required/>
                    </div>

                    <div class="input-box">
                        <span class="details">Password</span>
                        <input name="password" type="text" placeholder="Enter your password"onChange={handleInputChange} required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Confirm Password</span>
                        <input name="confirmpassword" type="text" placeholder="Confirm your password"onChange={handleInputChange} required/>
                    </div>
                </div>
                <div class="button">
                    <input type="submit"  value="Sign up"/>
                </div>
                </form>
        </div>

        {/* <!-- Success Alert --> */}
        <div class="text-success" style={{"align-content":"center"}}>
          
        </div>
        <div class="text-danger" style={{"align-content":"center"}}>
           
        </div>
    </div>
        </div>
      </>
    );
  };
  
  export default Register;
  