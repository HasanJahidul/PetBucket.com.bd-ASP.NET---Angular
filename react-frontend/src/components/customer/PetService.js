import React, { useState } from 'react';
import CustomerSidebar from '../layouts/sidebar/CustomerSidebar';
import axios from 'axios';
import {ToastContainer,toast,Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

const PetService = (props) => {

    //validate form
    const { register, formState: { errors }, handleSubmit } = useForm();
    

    const [petService, setPetService] = useState({
        name: '',
        phone: '',
        address: '',
        date: '',
        duration: '',
        petdetails: '',
        requestdetails: '',
        
    });
    // const [duration, setDuration] = useState(0);
   // setting the state of the form
    const getDurationtOnInputChange  = (e) => {
        setAmount(parseInt(e.target.value)*20);
        // console.log(name, value);
        
    }
    // const handleChange = () => setAmount(parseInt(duration)*20);

    
    
    //calculate the total price of the service from the input fields.
     const [tamount, setAmount] = useState(0);
     
    
    //submit the form
     const bookService = async (data) => {
        //send the request to the server to book the service.
   
        const customer_id =parseInt("1");
        
        const phone = data.phone.toString();
        const address = data.address.toString();
        const name = data.name.toString();
        const date = data.date.toString();
        const duration =data.duration.toString();
        const petdetails = data.petdetails.toString();
        const requestdetails = props.serviceName.toString();
        const amount = tamount.toString();
        
        const res = await axios.post('https://localhost:44398/api/PetService/Add',
        {customer_id:customer_id,name:name, phone: phone, address: address,
             date: date, duration: duration,petdetails: petdetails, 
             requestdetails: requestdetails, amount: amount});
        if(res.status === 200){
            toast.success(props.serviceName+" Booked Successfully");
            
            
            // setPetService({ 
            // name: '',
            // phone: '',
            // address: '',
            // date: '',
            // duration: '',
            // petdetails: '',
            // requestdetails: '', })
            setAmount(0);
        } if(res.status === 204){
            toast.success(props.serviceName+" Booked Successfully");
            
            
            // setPetService({ 
            // name: '',
            // phone: '',
            // address: '',
            // date: '',
            // duration: '',
            // petdetails: '',
            // requestdetails: '', })
            setAmount(0);
        }
        else{
            toast.error("An error occured to book "+props.serviceName+ " service");
        }
    }
    

    return (
        <>
        <CustomerSidebar/>
        <ToastContainer position="top-right" theme='dark' transition={Zoom} />
          
    <div class="content-container">

<div class="container-fluid">
    <div class="centerdiv">
        <div class="reg-container">
            <div class="title">{props.serviceName}</div>
            <div class="content">
               <form onSubmit={handleSubmit(bookService)}>
                    
                    <div class="user-details">
                        {/* Name Input */}
                        <div class="input-box">
                            <span class="details">Name</span>
                            <input name="name" type="text" placeholder="Enter your name" 
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
                        {/* Email Input */}
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
                            {/* Phone Input */}
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
                                {/* NID Input */}
                        <div class="input-box">
                            <span class="details">NID Number</span>
                            <input name="nid" type="text" placeholder="Enter your NID number" 
                            {...register('nid', { required: true, maxLength: 17,minLength:10,pattern: /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/ })}
                            />
                            {errors.nid && errors.nid.type === "required" && (
                              <span className='erralert'><br/>NID number is required <br/></span>
                            )}
                            {errors.nid && errors.nid.type === "maxLength" && (
                              <span className='erralert'><br/>Max length exceeded <br/></span>
                            )}
                            {errors.nid && errors.nid.type === "minLength" && (
                              <span className='erralert'><br/>Minimun length is 10<br/></span>
                            )}
                            {errors.nid && errors.nid.type === "pattern" && (
                              <span className='erralert'><br/>Input only numbers <br/></span>
                            )}
                        </div>
                        {/* Address Input */}
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
                        {/* Date Input */}
                        <div class="input-box">
                            <span class="details">Date</span>
                            <input name="date" type="date" placeholder="Enter your Date"
                            {...register('date', { required: true })}
                            />
                            {errors.date && errors.date.type === "required" && (
                                <span className='erralert'><br/>Date is required <br/></span>
                                )}
                        </div>
                        {/* Duration Input */}
                        <div class="input-box">
                            <span class="details">Duration</span>
                            <input name="duration" id = "duration" type="text" placeholder="Enter your needed service hour"
                            {...register('duration', {onChange: (e) => {getDurationtOnInputChange(e)}, required: true, max: 50,min:1, pattern: /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/ })}
                            />
                            {errors.duration && errors.duration.type === "required" && (
                              <span className='erralert'><br/>Duration is required <br/></span>
                            )}
                            {errors.duration && errors.duration.type === "max" && (
                              <span className='erralert'><br/>Max Duration is 50 hrs <br/></span>
                            )}
                            {errors.duration && errors.duration.type === "min" && (
                              <span className='erralert'><br/>Minimun Duration is at least 1 hr <br/></span>
                            )}
                            {errors.duration && errors.duration.type === "pattern" && (
                                <span className='erralert'><br/>Input duration in numbers <br/></span>
                            )}
                            
                        </div>
                        {/* Amount Input */}
                        <div class="input-box">
                            <span class="details">Amount</span>
                            <input name="amount" type="text" placeholder="Amount you have to pay" value={tamount}  disabled/>
                        </div>
                        {/* Pet Details Input */}
                        <div class="input-box">
                            <span class="details">Pet Details</span>
                            <input name="petdetails" type="text" placeholder="Enter details about pe"
                            {...register('petdetails', { required: true, maxLength: 50,minLength:10 })}
                            />
                            {errors.petdetails && errors.petdetails.type === "required" && (
                                <span className='erralert'><br/>Pet details is required <br/></span>
                                )}
                            {errors.petdetails && errors.petdetails.type === "maxLength" && (
                                <span className='erralert'><br/>Max length exceeded <br/></span>
                                )}
                            {errors.petdetails && errors.petdetails.type === "minLength" && (
                                <span className='erralert'><br/>Minimun length is 10 <br/></span>
                                )}
                        </div>
                        {/* Request Details Input */}
                        <div class="input-box">
                            <span class="details">Request Details</span>
                            <input name="requestdetails" type="text" placeholder="Enter Service type" value={props.serviceName} disabled/>
                        </div>
                        {/* Submit Button */}
                    </div>
                    <div class="button">
                        <input type="submit" value={props.buttonName} />
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
    </div>
</div>

        
        </>
    )
}

export default PetService
