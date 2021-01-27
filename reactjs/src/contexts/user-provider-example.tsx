import React, { useContext, useState } from 'react';

import { IUser } from 'src/services/user-example';
import { MayBe } from 'src/types';

export const UserContext = React.createContext<MayBe<IUser>>(null);

export const SetUserContext = React.createContext<React.Dispatch<React.SetStateAction<MayBe<IUser>>>>(() => null);

export const useUser = () => useContext(UserContext);

export const useSetUser = () => useContext(SetUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<MayBe<IUser>>(null);
  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>{children}</SetUserContext.Provider>
    </UserContext.Provider>
  );
};
