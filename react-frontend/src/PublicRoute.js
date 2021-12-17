import { Redirect , Route } from "react-router-dom";
import { getSession } from "./components/auth/Session";

const PublicRoute = ({component: Component, ...rest}) => {

    return (
        <>
            <Route
                {...rest}
                render={props =>{
                    return !getSession() ? <Component {...props} />
                    : <Redirect to={{ pathname: "/login"}}/>                
                } }
            />
        </>
        
    )
}

export default PublicRoute;