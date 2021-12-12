import React from 'react'

const AdminSidebar = () => {
    return (
        <div>
            <div class="sidebar-container">
    <div class="sidebar-logo">
        Admin
    </div>
    
    <ul class="sidebar-navigation">
    <li class="header"><h2 class="danger">Main Content</h2></li>
        <li>
            <a href="/AdminDashboard">
                <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard
            </a>
        </li>
        <li>
            <a href="/ProfitDetails">
                <i class="fa fa-tachometer" aria-hidden="true"></i> Profit Details
            </a>
        </li>
        <li>
            <a href="/RequestDetails">
                <i class="fa fa-tachometer" aria-hidden="true"></i> Request Details
            </a>
        </li>
        <li class="header"><h2 class="danger">USER LIST</h2></li>

        <li>
            <a href="/CustomerList">
                <i class="fa fa-home" aria-hidden="true"></i> Customer List
            </a>
        </li>
        <li>
            <a href="/PetSitterList">
                <i class="fa fa-home" aria-hidden="true"></i> Pet Sitter List
            </a>
        </li>
        <li>
            <a href="/AgencyList">
                <i class="fa fa-home" aria-hidden="true"></i> Agency List
            </a>
        </li>

        <li class="header"><h2 class="danger">ADD USER</h2></li>
        <li>
            <a href="/AddCustomer">
                <i class="fa fa-users" aria-hidden="true"></i> Add Customer
            </a>
        </li>
        <li>
            <a href="/AddPetSitter">
                <i class="fa fa-cog" aria-hidden="true"></i> Add Pet Sitter
            </a>
        </li>
        <li>
            <a href="/AddAgency">
                <i class="fa fa-info-circle" aria-hidden="true"></i> Add Agencey
            </a>
        </li>
        <li class="header"><h2 class="danger">OTHERS</h2></li>
        <li>
            <a href="/Report">
                <i class="fa fa-info-circle" aria-hidden="true"></i> Report
            </a>
        </li>
        <li>
            <a href="/Auth/Logout">
                <i class="fa fa-info-circle" aria-hidden="true"></i> LOGOUT
            </a>
        </li>
    </ul>
</div>
        </div>
    )
}

export default AdminSidebar
