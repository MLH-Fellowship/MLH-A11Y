import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  //Link,
  Redirect,
//   useHistory,
//   useLocation
} from "react-router-dom";

function PrivateRoute({ children, ...rest }) {

    const fakeAuth = {
        isAuthenticated: false,
        authenticate(cb) {
          this.isAuthenticated = true
          setTimeout(cb, 100) // fake async
        },
        signout(cb) {
          this.isAuthenticated = false
          setTimeout(cb, 100) // fake async
        }
      }

    let auth = useAuth();
    return (
    <Route {...rest} render={({ location }) => {
      return fakeAuth.isAuthenticated === true
        ? children
        : <Redirect to={{
            pathname: '/unauthorized',
            state: { from: location }
          }} />
    }} />
    );
  }

  export default PrivateRoute;