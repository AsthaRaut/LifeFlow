import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Astha",
    email: "astha@example.com",
    avatar: "A",
  });

  const updateUser = (newUserData) => {
    setUser((previousUser) => ({
      ...previousUser,
      ...newUserData,
    }));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

export default UserProvider;