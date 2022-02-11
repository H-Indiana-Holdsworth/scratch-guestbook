import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import Toggle from '../../CustomHooks/DarkMode/Toggle';
import { useStyles } from '../../CustomHooks/UseStyles/UseStyles';
import '../GuestForm/GuestForm.css';

export default function GuestForm() {
  // useUser context
  const { user, setUser } = useUser();

  // useEntries context
  const { setEntries } = useEntries();

  // Component State
  const [name, setName] = useState('');
  const [newEntry, setNewEntry] = useState('');

  // updates entry list with info respective to the user
  function updateEntryList() {
    setUser(name);
    setEntries((prevState) => [...prevState, { name: name, entry: newEntry }]);
    setNewEntry('');
  }

  // styles material UI text fields
  function StyledTextField(props) {
    const classes = useStyles();

    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
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
    <label className="name-TextField">
      Name:
      <StyledTextField
        id="filled-primary"
        label="Filled primary"
        variant="filled"
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

        <label className="entry-TextField">
          Guest Entry:
          <StyledTextField
            id="filled-primary"
            label="Filled primary"
            variant="filled"
            color="primary"
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
