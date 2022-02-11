import React from 'react';
import EntryList from '../components/EntryList/EntryList';
import GuestForm from '../components/GuestForm/GuestForm';
import Header from '../components/Header/Header';
import { EntriesProvider } from '../context/EntryContext';

export default function Home() {
  return (
    <div>
      <EntriesProvider>
        <Header />
        <GuestForm />
        <EntryList />
      </EntriesProvider>
    </div>
  );
}
