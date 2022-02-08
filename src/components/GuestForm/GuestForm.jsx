import React, { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function GuestForm() {
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  const [name, setName] = useState('');
  const [newEntry, setNewEntry] = useState('');

  function updateEntryList() {
    if (!newEntry) return setUser(name);

    setEntries([...entries, { name: name, entry: newEntry }]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntryList();
  };
  return (
    <div>
      <h1>Guest Book</h1>
      {!user && (
        <form className="user-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Guest Entry"
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
          />
          <button>Save</button>
        </form>
      )}
    </div>
  );
}
