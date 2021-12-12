import React from 'react'
import AdminSidebar from '../layouts/sidebar/AdminSidebar'
import FormContainer from "../FormContainer.js";

const UserEdit = (props) => {
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
            <FormContainer 
            title={props.title}
            buttonName={props.buttonName} 
            />
                        <div>
                            <a href={props.link}><h4 class="warning">Back To List</h4></a>
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

export default UserEdit
