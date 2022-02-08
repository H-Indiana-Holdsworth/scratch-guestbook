import React from 'react';
import { useEntries } from '../../context/EntryContext';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div>
      <h1>Entry List</h1>
    </div>
  );
}
