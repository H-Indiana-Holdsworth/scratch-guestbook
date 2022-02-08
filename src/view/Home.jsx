import React from 'react';
import Entry from '../components/Entry/Entry';
import EntryList from '../components/EntryList/EntryList';
import GuestForm from '../components/GuestForm/GuestForm';
import { EntriesProvider } from '../context/EntryContext';

export default function Home() {
  return (
    <div>
      <EntriesProvider>
        <EntryList>
          <Entry />
        </EntryList>
      </EntriesProvider>
      <GuestForm />
    </div>
  );
}
