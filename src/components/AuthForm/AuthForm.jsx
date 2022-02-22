import React from 'react';

export default function AuthForm() {
  return (
    <div>
      <form>
        <label>Email</label>
        <input type="text" aria-label="email-input" />

        <label>Password</label>
        <input type="text" aria-label="password-input" />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
