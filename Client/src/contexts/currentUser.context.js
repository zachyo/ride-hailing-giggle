import { createContext, useState } from "react";

export const CurrentUserContext = createContext({
  currentUser: null,
  setUserValue: () => {},
});

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const setUserValue = (user) => setCurrentUser(user);
  return (
    <CurrentUserContext.Provider value={{ currentUser, setUserValue }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
