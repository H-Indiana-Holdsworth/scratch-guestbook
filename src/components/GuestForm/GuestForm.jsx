import React from 'react';

export default function GuestForm() {
  return (
    <div>
      <form className="user-form">
        <input placeholder="Name" />
        <input placeholder="Guest Entry" />
        <button>Save</button>
      </form>
    </div>
  );
}
