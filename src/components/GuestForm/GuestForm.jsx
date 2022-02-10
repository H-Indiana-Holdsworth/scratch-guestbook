import React, { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import '../GuestForm/GuestForm.css';

export default function GuestForm() {
  const { user, setUser } = useUser();
  const { setEntries } = useEntries();

  const [name, setName] = useState('');
  const [newEntry, setNewEntry] = useState('');

  function updateEntryList() {
    setUser(name);
    setEntries((prevState) => [...prevState, { name: name, entry: newEntry }]);
    setNewEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntryList();
  };

  const handleName = (e) => {
    e.preventDefault();
    setUser('');
    setName('');
  };

  const nameInput = (
    <label className="name-input">
      Name:
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );

  return (
    <div>
      <h1>Guest Book</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        {user ? null : nameInput}
        <label className="entry-input">
          Guest Entry:
          <input
            type="text"
            placeholder="Guest Entry"
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
          />
        </label>
        <button type="submit" className="save-button">
          Save
        </button>
        {user ? (
          <button onClick={handleName} className="name-button">
            Change Name
          </button>
        ) : null}
      </form>
    </div>
  );
}
