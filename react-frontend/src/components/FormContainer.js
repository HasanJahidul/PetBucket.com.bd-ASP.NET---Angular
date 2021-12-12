import React from 'react'

const FormContainer = (props) => {
    
    return (
        <>
             <div class="reg-container">
        <div class="title">{props.title}</div>
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
                
                </form>
                <div class="button">
                    <input type="submit" value={props.buttonName}/>
                </div>
        </div>

        {/* <!-- Success Alert --> */}
        <div class="text-success" style={{"align-content":"center"}}>
        </div>
        <div class="text-danger" style={{"align-content":"center"}}>
        </div>
    </div>   
        </>
    )
}

export default FormContainer
