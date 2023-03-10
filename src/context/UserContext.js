import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const values = { user, setUser };

  return (
    <UserContext.Provider value={values}> {children} </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
