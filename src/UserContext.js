import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get("http://localhost:4000/get_profile").then(({ data }) => {
        setUser(data);
        setReady(true);
      });

      // .then((tokenData) => {
      //   setUser(tokenData);
      // });
    }
  }, []);
  console.log(ready, "raedy");
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
