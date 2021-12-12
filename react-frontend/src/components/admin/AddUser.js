import React from 'react'
import AdminSidebar from '../layouts/sidebar/AdminSidebar'
import FormContainer from "../FormContainer.js";

const AddUser = (props) => {
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
                <FormContainer 
              title={props.title}
              buttonName={props.buttonName} 
            />
                </div>
            </section>
        </div>
    </div>
</div>
        </>
    )
}

export default AddUser
