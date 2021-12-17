import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  
  const { register, formState: { errors }, handleSubmit } = useForm();

const log = async (data) =>{
  //alert(JSON.stringify(data));
  console.log(data);
  const res= axios.post('https://localhost:44398/api/Login',{
    email: data.email,
    password: data.password
  });
  console.log(res);


}
  //console.log(userData);
  return (
    <>
    <div class=" login-body">
      
    <div class="wrapper fadeInDown">
        <div id="formContent">
            {/* <!-- Tabs Titles -->
            <!-- Icon --> */}
            <div class="fadeIn first">
                <img src="https://cdn.discordapp.com/attachments/800404133731369023/904061372730585128/petbucket.png" id="icon" alt="User Icon" />
            </div>

            {/* <!-- Login Form --> */}
           
             <form onSubmit={handleSubmit(log)}>

                <input 
                  name="email" 
                  type="text" 
                  placeholder="Enter your email"  
                  {...register('email', { required: true })}
                  />
                {errors.email && errors.email.type === "required" && (
                  <span className='erralert' ><br/>Email is required <br/></span>
                )}
                
                 <input 
                 name="password" 
                 type="text" 
                 placeholder="Enter your password"
                 {...register('password', { required: true})}
                 /> 
                {errors.password && errors.password.type === "required" && (
                          <span className='erralert' ><br/>Password is required <br/></span>
                        )}
                
                <br />

                <input type="submit" class="fadeIn fourth" value="Log In"/><br />

                <div class="text-danger" style={{"align-content":"center"}}>
                  
                </div>
            

              </form>

            {/* <!-- Remind Passowrd --> */}
            <div id="formFooter">
                <a class="underlineHover" href="/register">Forgot Password?</a>
            </div>

        </div>

    </div>

</div>
</>
  )
}

export default Login
