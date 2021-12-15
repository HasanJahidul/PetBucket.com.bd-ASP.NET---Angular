import React, { useState } from 'react';
import CustomerSidebar from '../layouts/sidebar/CustomerSidebar';
import axios from 'axios';
import {ToastContainer,toast,Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PetService = (props) => {

    const [petService, setPetService] = useState({
        name: '',
        phone: '',
        address: '',
        date: '',
        duration: '',
        petdetails: '',
        requestdetails: '',
        
    });
   // setting the state of the form
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPetService({  ...petService,[name]: [value]})
        // console.log(name, value);
        
    }
    
    
    //calculate the total price of the service from the input fields.
     const [tamount, setAmount] = useState(0);
     const handleChange = (e) => setAmount(parseInt(e.target.value)*20);
    
    //submit the form
     const bookService = async (e) => {
        //send the request to the server to book the service.
        e.preventDefault();
        const customer_id =parseInt("1");
        
        const phone = petService.phone.toString();
        const address = petService.address.toString();
        const name = petService.name.toString();
        const date = petService.date.toString();
        const duration =petService.duration.toString();
        const petdetails = petService.petdetails.toString();
        const requestdetails = props.serviceName.toString();
        const amount = tamount.toString();
        
        const res = await axios.post('https://localhost:44398/api/PetService/Add',
        {customer_id:customer_id,name:name, phone: phone, address: address,
             date: date, duration: duration,petdetails: petdetails, 
             requestdetails: requestdetails, amount: amount});
        if(res.status === 200){
            toast.success(props.serviceName+" Booked Successfully");
            
            
            setPetService({ 
            name: '',
            phone: '',
            address: '',
            date: '',
            duration: '',
            petdetails: '',
            requestdetails: '', })
            setAmount(0);
        } if(res.status === 204){
            toast.success(props.serviceName+" Booked Successfully");
            
            
            setPetService({ 
            name: '',
            phone: '',
            address: '',
            date: '',
            duration: '',
            petdetails: '',
            requestdetails: '', })
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
               <form onSubmit={bookService}>
                    
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">Name</span>
                            <input name="name" type="text" placeholder="Enter your name" onChange={handleInputChange} required/>

                        </div>
                        <div class="input-box">
                            <span class="details">Email</span>
                            <input name="email" type="text" placeholder="Enter your email" onChange={handleInputChange} required/>
                        </div>
                        <div class="input-box">
                            <span class="details">Phone Number</span>
                            <input name="phone" type="text" placeholder="Enter your number" onChange={handleInputChange} required/>
                        </div>

                        <div class="input-box">
                            <span class="details">NID Number</span>
                            <input name="nid" type="text" placeholder="Enter your NID number" onChange={handleInputChange} required/>
                        </div>

                        <div class="input-box">
                            <span class="details">Address</span>
                            <input name="address" type="text" placeholder="Enter your address" onChange={handleInputChange} required/>
                        </div>
                        <div class="input-box">
                            <span class="details">Date</span>
                            <input name="date" type="date" placeholder="Enter your Date" onChange={handleInputChange} required/>
                        </div>
                        <div class="input-box">
                            <span class="details">Duration</span>
                            <input name="duration" id = "duration" type="text" placeholder="Enter your needed service hour"  onBlur={handleInputChange} onChange ={handleChange} required/>
                            
                        </div>
                        <div class="input-box">
                            <span class="details">Amount</span>
                            <input name="amount" type="text" placeholder="Amount you have to pay" value={tamount} required disabled/>
                        </div>
                        <div class="input-box">
                            <span class="details">Pet Details</span>
                            <input name="petdetails" type="text" placeholder="Enter details about pe" onChange={handleInputChange} required/>
                        </div>
                        <div class="input-box">
                            <span class="details">Request Details</span>
                            <input name="requestdetails" type="text" placeholder="Enter Service type" value={props.serviceName} disabled/>
                        </div>
                        



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
