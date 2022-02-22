import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useStyles } from '../../CustomHooks/UseStyles/UseStyles';
import { useUser } from '../../hooks/useUser';
import '../GuestForm/GuestForm.css';

// styles material UI text fields
function StyledTextField(props) {
  const classes = useStyles();
  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

export default function GuestForm() {
  // useUser context
  const { user, logout } = useUser();

  // useEntries context
  const { setEntries } = useEntries();

  // Component State
  const [name, setName] = useState('');
  const [newEntry, setNewEntry] = useState('');

  // updates entry list with info respective to the user
  function updateEntryList() {
    setEntries((prevState) => [...prevState, { name: name, entry: newEntry }]);
    setNewEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntryList();
  };

  const nameInput = (
    <label className="name-TextField">
      <StyledTextField
        id="filled-primary"
        label="Name"
        variant="filled"
        type="text"
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

        <label className="entry-TextField">
          <StyledTextField
            id="filled-primary"
            label="Entry"
            variant="filled"
            type="text"
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
          />
        </label>

        <button type="submit" className="save-button">
          Save
        </button>

        {user ? (
          <button onClick={logout} className="name-button">
            Logout
          </button>
        ) : null}
      </form>
    </div>
  );
}
