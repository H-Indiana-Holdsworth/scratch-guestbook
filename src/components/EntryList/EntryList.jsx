import React from 'react';
import { useEntries } from '../../context/EntryContext';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div>
      {entries.map(({ entry, name }) => (
        <div className="entry-card" key={entry}>
          <p>{entry}</p>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}
