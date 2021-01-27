import { AxiosRequestConfig } from 'axios';

import httpClient from 'src/configs/http-client';
import { IResponse } from 'src/types';

import { IGetUser } from './get-user.interface';

export const getUser = async (config?: AxiosRequestConfig) => {
  return httpClient.get<IGetUser[]>('https://jsonplaceholder.typicode.com/users');
};
