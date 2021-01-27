import { useCallback, useEffect, useState } from 'react';

import { useSetAppConfig } from 'src/contexts/app-provider-example';
import { useSetUser } from 'src/contexts/user-provider-example';
import { localStorageHelper } from 'src/helpers';
import { getAppConfig } from 'src/services/app-config-example';
import { getMe } from 'src/services/user-example';

export const useGetAppData = () => {
  const setUser = useSetUser();
  const setAppConfig = useSetAppConfig();
  const [loading, setLoading] = useState(true);

  const getAppData = useCallback(async () => {
    const [d1, d2] = await Promise.all([getAppConfig(), localStorageHelper.isLogin() ? getMe() : null]);
    setAppConfig({ appName: d1.data.data?.appName || 'Demo' });
    if (d2) {
      const profile = { username: localStorageHelper.getItem(process.env.REACT_APP_ACCESS_TOKEN_KEY!) };
      setUser(profile);
    }
    setLoading(false);
  }, [setAppConfig, setUser]);

  useEffect(() => {
    getAppData();
  }, [getAppData]);

  return { loading };
};
