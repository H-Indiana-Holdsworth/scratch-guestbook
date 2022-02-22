import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Auth from './view/Auth/Auth';
import Home from './view/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
