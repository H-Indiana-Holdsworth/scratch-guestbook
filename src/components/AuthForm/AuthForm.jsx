import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useUser } from '../../hooks/useUser';

export default function AuthForm() {
  const location = useLocation();
  const history = useHistory();
  const user = useUser();
  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  const [error, setError] = useState(null);

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (event) => {
    event.preventDefault();
    const loginSuccessful = user.login(formState.email, formState.password);
    loginSuccessful ? history.replace(from.pathname) : setError('Login Failed');
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          aria-label="Email"
          onChange={handleFormChange}
        />

        <label>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          aria-label="Password"
          onChange={handleFormChange}
        />

        <button type="submit">Sign In</button>
      </form>

      {error}
    </div>
  );
}
