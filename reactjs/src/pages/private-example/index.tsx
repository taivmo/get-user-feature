import React, { useEffect, useRef, useState } from 'react';

import axios from 'axios';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import { Button } from 'src/components';
import { httpStatus } from 'src/configs/http-status';
import { useSetAppConfig } from 'src/contexts/app-provider-example';
import { useCancelRequest } from 'src/hooks/use-cancel-request';
import { useUnmounted } from 'src/hooks/use-unmounted';
import {
  getAppConfig,
  getAppConfigBadReq,
  getAppConfigErrorAuth,
  getAppConfigErrorForbidden,
  getAppConfigErrorReq,
} from 'src/services/app-config-example';

import { Home } from '../home-example';

export const PrivatePage = () => {
  const [msg, setMsg] = useState('');
  const isUnmounted = useRef(false);
  const { t } = useTranslation();
  const setAppConfig = useSetAppConfig();
  const source = axios.CancelToken.source();
  const handleError = useErrorHandler();

  async function submit() {
    try {
      const { status } = await getAppConfigErrorReq({ cancelToken: source.token });
      if (status === httpStatus.StatusBadRequest) {
        setMsg('Bad request');
      } else {
        setMsg('Success');
      }
    } catch (e) {
      handleError(e);
    }
  }

  useEffect(() => {
    async function getData() {
      try {
        await Promise.all([
          getAppConfig({ cancelToken: source.token }),
          getAppConfigBadReq({ cancelToken: source.token }),
          // getAppConfigErrorAuth({ cancelToken: source.token }),
          // getAppConfigErrorForbidden({ cancelToken: source.token }),
        ]);
        setAppConfig({ appName: 'test' });
        if (!isUnmounted.current) {
          setMsg('resolver');
        }
      } catch (e) {
        console.log(e);
        if (!isUnmounted.current) {
          handleError(e);
        }
      }
    }
    getData();
  }, [handleError, setAppConfig, source.token]);

  useCancelRequest(source);
  useUnmounted(isUnmounted);
  return (
    <>
      <Home />
      <h1>{t('privateMsg')}</h1>
      <Button onClick={submit}>Submit</Button>
      <p>{msg}</p>
    </>
  );
};
