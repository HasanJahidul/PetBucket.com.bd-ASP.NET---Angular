import React from 'react'

const CustomerSidebar = () => {
    return (
        <>
    <div class="sidebar-container">
    <div class="sidebar-logo">
        <img src="https://cdn.discordapp.com/attachments/800404133731369023/904061372730585128/petbucket.png" alt='' />
    </div>
    <ul class="sidebar-navigation">
        <li class="header">Navigation</li>
        <li>
            <a href="/Customer/CustomerDashboard">
                <i class="fa fa-home" aria-hidden="true"></i> Homepage
            </a>
        </li>
        <li>
            <a href="/">
                <i class="fa fa-tachometer" aria-hidden="true"></i> Edit Profile
            </a>
        </li>
        <li>
            <a href="/">
                <i class="fa fa-tachometer" aria-hidden="true"></i>Change Password
            </a>
        </li>
        <li>
            <a href="/Auth/Logout">
                <i class="fa fa-tachometer" aria-hidden="true"></i>Log Out
               
            </a>
        </li>

        <li class="header">Another Menu</li>
        <li>
            <a href="/CustomerServices/PetDayCare">
                <i class="fa fa-users" aria-hidden="true"></i> Pet Day Care
            </a>
        </li>
        <li>
            <a href="/CustomerServices/DogWalking">
                <i class="fa fa-cog" aria-hidden="true"></i> Dog Walking
            </a>
        </li>
        <li>
            <a href="/CustomerServices/PetTaxi">
                <i class="fa fa-info-circle" aria-hidden="true"></i> Pet Taxi
            </a>
        </li>
        <li>
            <a href="/CustomerServices/PetSitting">
                <i class="fa fa-info-circle" aria-hidden="true"></i> Pet Sitting
            </a>
        </li>
        <li>

            <a href="/CustomerServices/PetTraining">
                <i class="fa fa-info-circle" aria-hidden="true"></i> Pet Training
            </a>
        </li>
        <li>
            <a href="/CustomerServices/PetGromming">
                <i class="fa fa-info-circle" aria-hidden="true"></i> Pet Gromming
            </a>
        </li>
    </ul>
</div>

        </>
    )
}

export default CustomerSidebar
