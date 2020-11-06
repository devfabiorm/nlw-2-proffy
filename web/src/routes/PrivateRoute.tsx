import React, {useContext} from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';
import AuthContext from '../contexts/auth';

interface IPrivateRoute extends RouteProps {
  component: React.ComponentType<any>
}

const PrivateRoute = ({ component:Component , ...rest }: IPrivateRoute) => {
  const {signed} = useContext(AuthContext);
  const location = useLocation();

  console.log(signed);

  return (
    <Route
      {...rest}
      render={() => signed
        ? <Component {...rest} />
        : <Redirect to={{
          pathname: '/sign-in',
          state: {
            from: location
          }
        }} />
      }
    />
  )
}

export default PrivateRoute;