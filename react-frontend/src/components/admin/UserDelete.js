import React from 'react'
import AdminSidebar from '../layouts/sidebar/AdminSidebar'
import UserDeleteContainer from "../UserDeleteContainer"


const UserDelete = (props) => {
    return (
        <>
            <AdminSidebar/>
            <UserDeleteContainer 
            title={props.title}
            link={props.link} 
            buttonName={props.buttonName}
            />
        </>
    )
}

export default UserDelete
