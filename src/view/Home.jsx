import React from 'react';
import Entry from '../components/Entry/Entry';
import EntryList from '../components/EntryList/EntryList';
import GuestForm from '../components/GuestForm/GuestForm';

export default function Home() {
  return (
    <div>
      <EntryList>
        <Entry />
      </EntryList>
      <GuestForm />
    </div>
  );
}
