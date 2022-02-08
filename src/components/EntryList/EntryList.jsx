import React from 'react';
import { useEntries } from '../../context/EntryContext';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div>
      {entries.map(({ entry, name }) => (
        <div className="entry-card" key={entry}>
          <p>Name: {name}</p>
          <p>Entry: {entry}</p>
        </div>
      ))}
    </div>
  );
}
