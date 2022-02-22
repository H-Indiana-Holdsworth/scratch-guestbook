import React from 'react';

export default function AuthForm() {
  return (
    <div>
      <form>
        <label>Email</label>
        <input id="email" name="email" type="email" aria-label="email-input" />

        <label>Password</label>
        <input id="password" name="password" type="password" aria-label="password-input" />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
