  // core components
  import CustomerSidebar from "../layouts/sidebar/CustomerSidebar.js";
  import FormContainer from "../FormContainer.js";
  
  const Profile = (props) => {
    return (
      <>
        <CustomerSidebar/> 
        <div class="content-container">

        <div class="container-fluid">
            <div class="centerdiv">
            <FormContainer 
              title={props.title}
              buttonName={props.buttonName} 
            />
                </div>
            </div>
        </div>

        
      </>
    );
  };
  
  export default Profile;
  