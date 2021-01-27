import { AxiosRequestConfig } from 'axios';

import httpClient from 'src/configs/http-client';
import { IResponse } from 'src/types';

import { IAppConfig } from './app-config.interface';

export const getAppConfig = async (config?: AxiosRequestConfig) => {
  return httpClient.get<IResponse<IAppConfig>>('https://httpstat.us/200?sleep=500', config);
};

export const getAppConfigBadReq = async (config?: AxiosRequestConfig) => {
  return httpClient.get<IResponse<IAppConfig>>('https://httpstat.us/400', config);
};

export const getAppConfigErrorReq = async (config?: AxiosRequestConfig) => {
  return httpClient.get<IResponse<IAppConfig>>('https://httpstat.us/500', config);
};

export const getAppConfigErrorAuth = async (config?: AxiosRequestConfig) => {
  return httpClient.get<IResponse<IAppConfig>>('https://httpstat.us/401?sleep=300', config);
};

export const getAppConfigErrorForbidden = async (config?: AxiosRequestConfig) => {
  return httpClient.get<IResponse<IAppConfig>>('https://httpstat.us/403', config);
};
