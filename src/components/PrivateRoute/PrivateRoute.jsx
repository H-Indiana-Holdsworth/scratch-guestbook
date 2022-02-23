import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

export function PrivateRoute({ children, ...routeProps }) {
  let user = useUser();

  return (
    <Route
      {...routeProps}
      render={({ location }) =>
        user.user ? children : <Redirect to={{ pathname: '/auth', state: { from: location } }} />
      }
    />
  );
}
