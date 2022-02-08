import React from 'react';

export default function GuestForm() {
  return (
    <div>
      <form className="user-form">
        <input type="text" placeholder="Guest Entry" />
        <input type="text" placeholder="Name" />
        <button>Save</button>
      </form>
    </div>
  );
}
