import React from 'react'
import CustomerDashboard from './customer/CustomerDashboard'
import AdminDashboard from './admin/AdminDashboard'
import { getSession } from './auth/Session'

const Dashboard = () => {
    const session = getSession()
    const type = session.type;
    if (type === 'Customer  ') {
        return <CustomerDashboard />
    }  else if (type === 'Admin     ') {
        return <AdminDashboard />
    } else {
        return <Redirect to="/login" />
    }
}

export default Dashboard
