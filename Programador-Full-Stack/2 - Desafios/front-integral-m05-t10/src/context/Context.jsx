import { createContext } from "react";
import ValuesProvider from "../hooks/ValuesProvider";

const UserContext = createContext({});

export function UserProvider({ children }) {
  const userProvider = ValuesProvider();
  return (
    <UserContext.Provider value={userProvider}>{children}</UserContext.Provider>
  );
}

export default UserContext;
