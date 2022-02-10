import React from 'react';
import { useEntries } from '../../context/EntryContext';
import '../EntryList/EntryList.css';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div className="entry-list">
      {entries.map(({ entry, name }) => (
        <div className="entry-card" key={entry}>
          <p className="name">Name: {name}</p>
          <p className="entry">Entry: {entry}</p>
        </div>
      ))}
    </div>
  );
}
