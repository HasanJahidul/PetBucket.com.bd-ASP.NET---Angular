import React from 'react'

const Login = () => {
  return (
    <div class=" login-body">
    <div class="wrapper fadeInDown">
        <div id="formContent">
            {/* <!-- Tabs Titles -->
            <!-- Icon --> */}
            <div class="fadeIn first">
                <img src="https://cdn.discordapp.com/attachments/800404133731369023/904061372730585128/petbucket.png" id="icon" alt="User Icon" />
            </div>

            {/* <!-- Login Form --> */}
           
             

                <input name="Email" type="text" placeholder="Enter your email" required/>
                <input name="Password" type="text" placeholder="Enter your password" required/>
                
                <br />

                <input type="submit" class="fadeIn fourth" value="Log In"/><br />

                <div class="text-danger" style={{"align-content":"center"}}>
                  
                </div>
            



            {/* <!-- Remind Passowrd --> */}
            <div id="formFooter">
                <a class="underlineHover" href="/register">Forgot Password?</a>
            </div>

        </div>

    </div>

</div>
  )
}

export default Login
