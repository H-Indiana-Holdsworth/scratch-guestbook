import React from 'react';
import { useUser } from '../../context/UserContext';
import DarkModeToggle from '../../DarkMode/DarkModeToggle';
import '../../DarkMode/DarkMode.scss';

export default function Header() {
  const { user } = useUser();

  return (
    <div>
      <DarkModeToggle />
      Hello {user ? user : 'Guest'}
    </div>
  );
}
