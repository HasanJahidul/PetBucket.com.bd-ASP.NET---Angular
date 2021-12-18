import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getSession } from "./components/auth/Session";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const session = getSession();
  console.log(session);
  // const token = session.AccessToken;

  return session ? (
    <Route
      {...rest}
      render={(props) => {
        <Component {...props} />;
      }}
    />
  ) : (
    <Route render={(props) => <Redirect to="/login" />} />
  );

  // eslint-disable-next-line no-unreachable
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return getSession() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/PetService/DogWalking",
                state: { from: props.location },
              }}
            />
          );
        }}
      />
    </>
  );
};

export default PrivateRoute;
