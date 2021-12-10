import React from 'react'
import AdminSidebar from '../layouts/sidebar/AdminSidebar'

const AddCustomer = () => {
    return (
        <>
            <AdminSidebar/>  
            <div class="content-container">
    <div class="container-fluid">
        <div class="grey-bg container-fluid">
            <section id="stats-subtitle">
                <div class="row">
                    <div class="col-12 mt-3 mb-1">
                        
                    </div>
                </div>
                <div class="centerdiv">
                <div class="reg-container">
        <div class="title">Add Customer</div>
        <p></p>
        <div class="content">
            <form>
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Full Name</span>
                        <input name="name" type="text" placeholder="Enter your Name" required/>
                    </div>
                    {/* <div class="input-box">
                            <span class="details">Username</span>
                            <input name="name" type="text" placeholder="Enter your username" required>
                        </div> */}
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
                        <span class="details">Password</span>
                        <input name="password" type="text" placeholder="Enter your password" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Confirm Password</span>
                        <input name="confirmpassword" type="text" placeholder="Confirm your password" required/>
                    </div>
                </div>
                <div class="button">
                    <input type="submit" value="Add Customer"/>
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
            </section>
        </div>
    </div>
</div>
        </>
    )
}

export default AddCustomer
