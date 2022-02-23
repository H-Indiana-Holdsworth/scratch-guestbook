import { Switch } from '@material-ui/core';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { PrivateRoute } from '../../components/PrivateRoute/PrivateRoute';
import { UserProvider } from '../../context/UserContext';
import Home from '../Home';
import Auth from './Auth';

test('Should render the login view', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <Switch>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </MemoryRouter>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
