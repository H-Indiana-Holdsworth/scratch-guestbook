import React from 'react';
import DarkModeToggle from '../../CustomHooks/DarkMode/DarkModeToggle';
import '../../CustomHooks/DarkMode/DarkMode.scss';
import { useUser } from '../../hooks/useUser';

export default function Header() {
  // useUser context
  const {
    user: { email },
  } = useUser();

  return (
    <div>
      <DarkModeToggle />
      Hello {email ? email : 'Guest'}
    </div>
  );
}
