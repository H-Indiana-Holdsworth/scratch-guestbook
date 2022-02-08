import React, { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

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

  return (
    <div>
      <h1>Guest Book</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        {!user && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="text"
          placeholder="Guest Entry"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        />
        <button type="submit">Save</button>
        <button>Change Name</button>
      </form>
    </div>
  );
}
