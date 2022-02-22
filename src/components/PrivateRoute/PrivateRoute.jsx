import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();

  return (
    <div>
      <Route
        {...routeProps}
        render={({ location }) =>
          user.user ? children : <Redirect to={{ pathname: '/auth', state: { from: location } }} />
        }
      />
    </div>
  );
}
