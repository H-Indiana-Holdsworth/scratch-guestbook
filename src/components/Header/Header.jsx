import React from 'react';
import DarkModeToggle from '../../CustomHooks/DarkMode/DarkModeToggle';
import '../../CustomHooks/DarkMode/DarkMode.scss';
import { useUser } from '../../hooks/useUser';

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
