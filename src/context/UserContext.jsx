import { useContext, createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const loginSuccessful =
      email === process.env.AUTH_EMAIL && password === process.env.AUTH_PASSWORD;
    if (loginSuccessful) setUser({ email });
    return loginSuccessful;
  };

  const logout = (callback) => {
    setUser(null);
    callback();
  };

  return <UserContext.Provider value={{ user, login, logout }}> {children} </UserContext.Provider>;
}

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be defined within a UserContext Provider');
  }

  return context;
};

export { UserProvider, useUser };
