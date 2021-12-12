import React from 'react'
import CustomerSidebar from '../layouts/sidebar/CustomerSidebar';


const PetService = (props) => {
    return (
        <>
        <CustomerSidebar/>
          
    <div class="content-container">

<div class="container-fluid">
    <div class="centerdiv">
        <div class="reg-container">
            <div class="title">{props.serviceName}</div>
            <div class="content">

               <form >
                    
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">Name</span>
                            <input name="name" type="text" placeholder="Enter your name" required/>

                        </div>
                        <div class="input-box">
                            <span class="details">Email</span>
                            <input name="email" type="text" placeholder="Enter your email" required/>
                        </div>
                        <div class="input-box">
                            <span class="details">Phone Number</span>
                            <input name="phone" type="text" placeholder="Enter your number" required/>
                        </div>

                        <div class="input-box">
                            <span class="details">NID Number</span>
                            <input name="nid" type="text" placeholder="Enter your NID number" required/>
                        </div>

                        <div class="input-box">
                            <span class="details">Address</span>
                            <input name="address" type="text" placeholder="Enter your address" required/>
                        </div>
                        <div class="input-box">
                            <span class="details">Date</span>
                            <input name="date" type="text" placeholder="Enter your Date" required/>
                        </div>
                        <div class="input-box">
                            <span class="details">Duration</span>
                            <input name="duration" id = "duration" type="text" placeholder="Enter your needed service hour"  onkeyup = "getAmount()" onblur = "getAmount()" required/>
                            
                        </div>
                        <div class="input-box">
                            <span class="details">Amount</span>
                            <input name="amount" type="text" placeholder="Amount you have to pay" required disabled/>
                        </div>
                        <div class="input-box">
                            <span class="details">Pet Details</span>
                            <input name="petdetails" type="text" placeholder="Enter details about pe" required/>
                        </div>
                        <div class="input-box">
                            <span class="details">Pet Details</span>
                            <input name="requestdetails" type="text" placeholder="Enter Service type" required/>
                        </div>
                        



                    </div>
                    <div class="button">
                        <input type="submit" value={props.buttonName}/>
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
