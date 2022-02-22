import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useUser } from '../../hooks/useUser';
import { TextField } from '@material-ui/core';
import { useStyles } from '../../CustomHooks/UseStyles/UseStyles';
import './AuthForm.css';

// styles material UI text fields
function StyledTextField(props) {
  const classes = useStyles();
  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

export default function AuthForm() {
  const location = useLocation();
  const history = useHistory();
  const user = useUser();
  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  const [error, setError] = useState(null);

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginWasSuccessful = user.login(formState.email, formState.password);
    loginWasSuccessful ? history.replace(from.pathname) : setError('Login Failed');
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="auth-form">
        <label className="email-TextField">
          <StyledTextField
            id="email"
            name="email"
            type="email"
            aria-label="Email"
            placeholder="Email"
            onChange={handleFormChange}
          />
        </label>

        <label className="password-TextField">
          <StyledTextField
            id="password"
            name="password"
            type="password"
            aria-label="Password"
            placeholder="Password"
            onChange={handleFormChange}
          />
        </label>

        <button type="submit" aria-label="Sign In" className="sign-in">
          Sign In
        </button>
      </form>

      {error && <h4>{error}</h4>}
    </div>
  );
}
