import React from 'react';

import { RouteProps } from 'react-router-dom';

import { LoginLayout } from 'src/layouts/login-example';
import { GetUser } from 'src/pages/get-user-example';

import { MainLayout } from '../layouts/main';
import { Home } from '../pages/home-example';
import { Login } from '../pages/login-example';
import { PrivatePage } from '../pages/private-example';

export interface IRoute extends RouteProps {
  restricted?: boolean;
  layout?: React.ComponentType;
}

const privateRoutes: IRoute[] = [
  {
    children: <PrivatePage />,
    path: '/private',
  },
  {
    children: <GetUser />,
    path: '/user',
  },
];
const publicRoutes: IRoute[] = [
  {
    children: <Home />,
    exact: true,
    path: '/',
  },
  {
    children: <Login />,
    path: '/login',
    layout: LoginLayout,
    restricted: true,
  },
];
const noLayoutRoutes: IRoute[] = [];

interface IConfigRoutes {
  appRoutes: IRoute[];
  isPrivate?: boolean;
  layout?: React.ComponentType;
}

export const configRoutes: IConfigRoutes[] = [
  {
    appRoutes: privateRoutes,
    isPrivate: true,
    layout: MainLayout,
  },
  {
    appRoutes: publicRoutes,
    layout: MainLayout,
  },
  {
    appRoutes: noLayoutRoutes,
  },
];
