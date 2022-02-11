import React from 'react';
import { useEntries } from '../../context/EntryContext';
import '../EntryList/EntryList.css';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div className="entry-list">
      {entries.map(({ entry, name }) => (
        <div className="entry-card" key={entry}>
          <h2 className="name"> {name}</h2>
          <h4 className="entry"> {entry}</h4>
        </div>
      ))}
    </div>
  );
}
