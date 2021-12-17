import React from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {ToastContainer,toast,Zoom} from 'react-toastify';
import { useForm } from "react-hook-form";
  const Register = (props) => {
    //Validation
    //const { register, formState: { errors }, getValues, handleSubmit} = useForm();
    const { register, formState: { errors }, handleSubmit,reset,getValues, } = useForm();
    const [response, setResponse] = React.useState(null);
    
    //State
    const history = useHistory();
    //function to register user

  const registeration = async (data) => {
   
    //send the request to the server to book the service.
    const name = data.name.toString();
    const phone = data.phone.toString();
    const address = data.address.toString();
    const email = data.email.toString();
    const nid = data.nid.toString();
    const password =data.password.toString();
    
    const res = await axios.post('https://localhost:44398/api/Register',
    {name:name, phone: phone, address: address,
      email: email,nid: nid, 
      password: password});
      
      console.log(res);
    if(res.status === 202){
      reset();
      toast.success("Registration Successful");
      
        //setTimeout(() => { history.push('/login'); }, 3000);
        
    }if(res.status === 400){
      toast.error(" is already registered");    
    }
    else{
        toast.error(res.data);
    }
     
    }

    return (
      <>
      <ToastContainer position="top-right" theme='dark' transition={Zoom} />
        <div class="reg-body">
          
        <div class="reg-container">
        <div class="fadeIn first centerdiv">
                <img src="https://cdn.discordapp.com/attachments/800404133731369023/904061372730585128/petbucket.png" id="icon" alt="User Icon" style={{paddingLeft:"10px"}} />
            </div>
        <div class="title">REGISTER</div>
        <p></p>
        <div class="content">
          
            <form onSubmit={handleSubmit(registeration)}>
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Full Name</span>
                        <input name="name" type="text" placeholder="Enter your Name" 
                        {...register('name', { required: true, maxLength: 20,minLength:6 })}
                        
                        />
                        {errors.name && errors.name.type === "required" && (
                          <span className='erralert' ><br/>Name is required <br/></span>
                        )}
                        {errors.name && errors.name.type === "maxLength" && (
                          <span className='erralert'><br/>Max length exceeded <br/></span>
                        )}
                        {errors.name && errors.name.type === "minLength" && (
                          <span className='erralert'><br/>Minimun length is 6 <br/></span>
                        )}
                    </div>
                    <div class="input-box">
                        <span class="details">Email</span>
                        <input name="email" type="text" placeholder="Enter your email" 
                        {...register('email', {
                          required: "<span className='erralert'>Email is required</span>",
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                         
                        />
                        {errors.email && errors.email.type === "required" && (
                          <span className='erralert'><br/>Email is required <br/></span>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                          <span className='erralert'><br/>Invalid email address <br/></span>
                        )}
                    </div>
                    <div class="input-box">
                        <span class="details">Phone Number</span>
                        <input name="phone" type="text" placeholder="Enter your number"
                        {...register('phone', { required: true, maxLength: 11,minLength:11,pattern: /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/ })}
                        />
                        {errors.phone && errors.phone.type === "required" && (
                          <span className='erralert'><br/>Phone number is required <br/></span>
                        )}
                        {errors.phone && errors.phone.type === "maxLength" && (
                          <span className='erralert'><br/>Max length exceeded <br/></span>
                        )}
                        {errors.phone && errors.phone.type === "minLength" && (
                          <span className='erralert'><br/>Minimun length is 11 <br/></span>
                        )}
                        {errors.phone && errors.phone.type === "pattern" && (
                          <span className='erralert'><br/>Invalid phone number <br/></span>
                        )}
                    </div>

                    <div class="input-box">
                        <span class="details">NID Number</span>
                        <input name="nid" type="text" placeholder="Enter your NID number"
                       
                        {...register('nid', { required: true, maxLength: 50,minLength:10 })}
                        />
                        {errors.address && errors.address.type === "required" && (
                          <span className='erralert'><br/>NID is required <br/></span>
                        )}
                        {errors.address && errors.address.type === "maxLength" && (
                          <span className='erralert'><br/>Max length is 50 <br/></span>
                        )}
                        {errors.address && errors.address.type === "minLength" && (
                          <span className='erralert'><br/>Minimun length is 10 <br/></span>
                        )}

                    </div>

                    <div class="input-box">
                        <span class="details">Address</span>
                        <input name="address" type="text" placeholder="Enter your address"
                        {...register('address', { required: true, maxLength: 50,minLength:10 })}
                        />
                        {errors.address && errors.address.type === "required" && (
                          <span className='erralert'><br/>Address is required <br/></span>
                        )}
                        {errors.address && errors.address.type === "maxLength" && (
                          <span className='erralert'><br/>Max length is 50 <br/></span>
                        )}
                        {errors.address && errors.address.type === "minLength" && (
                          <span className='erralert'><br/>Minimun length is 10 <br/></span>
                        )}
                    </div>

                    <div class="input-box">
                        <span class="details">Password</span>
                        <input name="password" type="text" placeholder="Enter your password"
                        {...register('password', { required: true, maxLength: 20,minLength:6 })}
                        />
                        {errors.password && errors.password.type === "required" && (
                          <span className='erralert'><br/>Password is required <br/></span>
                        )}
                        {errors.password && errors.password.type === "maxLength" && (
                          <span className='erralert'><br/>Password cannot greater than 20 <br/></span>
                        )}
                        {errors.password && errors.password.type === "minLength" && (
                          <span className='erralert'><br/>Minimun length is 6 <br/></span>
                        )}
                    </div>
                    <div class="input-box">
                        <span class="details">Confirm Password</span>
                        <input name="confirmpassword" type="text" placeholder="Confirm your password"
                        {...register("passwordConfirmation", {
                          required: "Please confirm password!",
                          validate: {
                            matchesPreviousPassword: (value) => {
                              const { password } = getValues();
                              return password === value ;
                            }
                          }
                        })}
                        />
                        {errors.passwordConfirmation && errors.passwordConfirmation.type === "required" && (
                          <span className='erralert'><br/>Confirm password is required <br/></span>
                        )}
                        {errors.passwordConfirmation && errors.passwordConfirmation.type === "matchesPreviousPassword" && (
                          <span className='erralert'><br/>Password does not match <br/></span>
                        )}

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
  