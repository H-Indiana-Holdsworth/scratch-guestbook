import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EntryList from './components/EntryList/EntryList';
import GuestForm from './components/GuestForm/GuestForm';
import Header from './components/Header/Header';
import { EntriesProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';

test('tests guest book functionality', () => {
  render(
    <UserProvider>
      <EntriesProvider>
        <Header />
        <GuestForm />
        <EntryList />
      </EntriesProvider>
    </UserProvider>
  );

  // looks for name and entry inputs and save button
  const nameInput = screen.getByRole('textbox', { name: /name entry/i });
  const entryInput = screen.getByRole('textbox', { name: / /i });
  const saveButton = screen.getByRole('button', { name: /save/i });

  // user types name in search
  const name = 'Indy';
  userEvent.type(nameInput, name);

  // user types entry
  const entry = 'Goodbye world';
  userEvent.type(entryInput, entry);

  // user clicks save button
  userEvent.click(saveButton);

  // name displays
  const displayName = screen.getByRole('heading', { name: /indy/i });
  expect(displayName).toBeInTheDocument();

  // entry displays
  const displayEntry = screen.getByRole('heading', { name: /goodbye world/i });
  expect(displayEntry).toBeInTheDocument();

  // user clicks name change button
  const changeNameButton = screen.getByRole('button', { name: /change name/i });
  userEvent.click(changeNameButton);

  // name input displays again
  expect(screen.getByRole('textbox', { name: /name entry/i })).toBeInTheDocument();
});
