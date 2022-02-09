import { useContext, createContext, useState } from 'react';

const EntriesContext = createContext();

function EntriesProvider({ children }) {
  const [entries, setEntries] = useState([]);

  return (
    <EntriesContext.Provider value={{ entries, setEntries }}> {children} </EntriesContext.Provider>
  );
}

const useEntries = () => {
  const context = useContext(EntriesContext);

  if (context === undefined) {
    throw new Error('useEntries must be defined within a UserContext Provider');
  }

  return context;
};

export { EntriesProvider, useEntries };
