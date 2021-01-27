import React from 'react';

import { NavLink } from 'react-router-dom';

import { Button } from 'src/components';
import { useAppConfig } from 'src/contexts/app-provider-example';
import { useSetUser, useUser } from 'src/contexts/user-provider-example';
import { localStorageHelper } from 'src/helpers';

import { ButtonLanguageList } from './components/button-language-list';
import style from './home.module.scss';
import { useHandleLanguage } from './hooks/use-custom-translation';

export const Home = () => {
  const { t } = useHandleLanguage();
  const user = useUser();
  const setUser = useSetUser();
  const appConfig = useAppConfig();

  function logout() {
    localStorageHelper.removeItem(process.env.REACT_APP_ACCESS_TOKEN_KEY!);
    setUser(null);
  }

  return (
    <div className={style['home']}>
      <h1>{t('description.title')}</h1>
      <h2>{appConfig?.appName}</h2>
      <div className={style['home__buttons']}>
        <ButtonLanguageList />
        {!user ? (
          <NavLink to="/login">
            <Button className={style['home__buttons__item']}>{t('login')}</Button>
          </NavLink>
        ) : (
          <Button onClick={logout} className={style['home__buttons__item']}>
            {t('logout')}
          </Button>
        )}
        <NavLink to="/private">
          <Button className={style['home__buttons__item']}>{t('private')}</Button>
        </NavLink>
        <NavLink to="/">
          <Button className={style['home__buttons__item']}>{t('home')}</Button>
        </NavLink>
        <NavLink to={process.env.REACT_APP_ACCESS_TOKEN_KEY ? '/user' : '/login'}>
          <Button className={style['home__buttons__item']}>{t('get user')}</Button>
        </NavLink>
      </div>
      {user && (
        <p>
          {t('hi')}, {user.username}
        </p>
      )}
    </div>
  );
};
