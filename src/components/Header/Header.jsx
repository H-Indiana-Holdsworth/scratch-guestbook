import React from 'react';
import { useUser } from '../../context/UserContext';
import DarkModeToggle from '../../CustomHooks/DarkMode/DarkModeToggle';
import '../../CustomHooks/DarkMode/DarkMode.scss';

export default function Header() {
  // useUser context
  const { user } = useUser();

  return (
    <div>
      <DarkModeToggle />
      Hello {user ? user : 'Guest'}
    </div>
  );
}
