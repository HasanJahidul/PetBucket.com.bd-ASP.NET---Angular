import React from "react";
import { Redirect , Route } from "react-router-dom";
import { getSession } from "./components/auth/Session";

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <>
            <Route
                {...rest}
                render={props =>{
                    return getSession() ? <Component {...props} />
                    : <Redirect to={{ pathname: "/CustomerDashboard", state:{from: props.location } }}/>                
                } }
            />
        </>
    )
}

export default PrivateRoute;