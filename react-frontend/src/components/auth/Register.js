import FormContainer from "../FormContainer.js";
  const Register = (props) => {
    return (
      <>
        <div class="reg-body">
        <FormContainer title={props.title}
           buttonName={props.buttonName} 
        />
        </div>
      </>
    );
  };
  
  export default Register;
  