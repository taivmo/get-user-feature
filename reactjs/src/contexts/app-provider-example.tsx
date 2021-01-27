import React, { useContext, useState } from 'react';

import { IAppConfig } from 'src/services/app-config-example';
import { MayBe } from 'src/types';

import { UserProvider } from './user-provider-example';

export const AppConfigContext = React.createContext<MayBe<IAppConfig>>(null);

export const SetAppConfigContext = React.createContext<React.Dispatch<React.SetStateAction<MayBe<IAppConfig>>>>(
  () => null,
);

export const useAppConfig = () => useContext(AppConfigContext);

export const useSetAppConfig = () => useContext(SetAppConfigContext);

export const AppProvider: React.FC = ({ children }) => {
  const [user, setApp] = useState<MayBe<IAppConfig>>(null);
  return (
    <AppConfigContext.Provider value={user}>
      <SetAppConfigContext.Provider value={setApp}>
        <UserProvider>{children}</UserProvider>
      </SetAppConfigContext.Provider>
    </AppConfigContext.Provider>
  );
};
