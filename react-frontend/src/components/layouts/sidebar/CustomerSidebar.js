import React from 'react'
import { authAxios } from '../../auth/Token';
import {removeSession} from '../../auth/Session';
import {ToastContainer,toast,Zoom} from 'react-toastify';
import { useHistory } from "react-router-dom";

const CustomerSidebar = () => {
    let history = useHistory();
    const handleLogout = () => {
        removeSession();
        const res =authAxios.get('https://localhost:44398/api/logout');
        console.log(res);
        history.push('/login');
        // if (res.status===200) {
        //     
        // }else{
        
        //     toast.error(<div> Logout Failed🤷‍♂️</div>);
        // }
        
      }
    return (
        <>
        <ToastContainer position="top-right" theme='dark' transition={Zoom} />
    <div class="sidebar-container">
    <div class="sidebar-logo">
        <img src="https://cdn.discordapp.com/attachments/800404133731369023/904061372730585128/petbucket.png" alt='' />
    </div>
    <ul class="sidebar-navigation">
        <li class="header">Navigation</li>
        <li>
            <a href="/CustomerDashboard">
                <i class="fa fa-home" aria-hidden="true"></i> Homepage
            </a>
        </li>
        <li>
            <a href="/customer/edit-profile">
                <i class="fa fa-tachometer" aria-hidden="true"></i> Edit Profile
            </a>
        </li>
        <li>
            <a href="/">
                <i class="fa fa-tachometer" aria-hidden="true"></i>Change Password
            </a>
        </li>
        <li>
            <a onClick={handleLogout}>
                <i class="fa fa-tachometer" aria-hidden="true"></i>Log Out
            </a>
        </li>

        <li class="header">Another Menu</li>
        <li>
            <a href="/PetService/PetDayCare">
                <i class="fa fa-users" aria-hidden="true"></i> Pet Day Care
            </a>
        </li>
        <li>
            <a href="/PetService/DogWalking">
                <i class="fa fa-cog" aria-hidden="true"></i> Dog Walking
            </a>
        </li>
        <li>
            <a href="/PetService/PetTaxi">
                <i class="fa fa-info-circle" aria-hidden="true"></i> Pet Taxi
            </a>
        </li>
        <li>
            <a href="/PetService/PetSitting">
                <i class="fa fa-info-circle" aria-hidden="true"></i> Pet Sitting
            </a>
        </li>
        <li>

            <a href="/PetService/PetTraining">
                <i class="fa fa-info-circle" aria-hidden="true"></i> Pet Training
            </a>
        </li>
        <li>
            <a href="/PetService/PetGromming">
                <i class="fa fa-info-circle" aria-hidden="true"></i> Pet Gromming
            </a>
        </li>
    </ul>
</div>

        </>
    )
}

export default CustomerSidebar
