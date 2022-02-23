import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be defined within a UserContext Provider');
  }

  return context;
}
