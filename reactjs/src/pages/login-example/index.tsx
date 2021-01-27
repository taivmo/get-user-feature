import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Button } from 'src/components';
import { useSetUser } from 'src/contexts/user-provider-example';
import { localStorageHelper } from 'src/helpers';

import style from './login.module.scss';

export const Login = () => {
  const [data, setData] = useState<{ username: string; password: string }>({ username: '', password: '' });
  const { t } = useTranslation();
  let history = useHistory();
  const setUser = useSetUser();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUser({ username: data.username });
    localStorageHelper.setItem(process.env.REACT_APP_ACCESS_TOKEN_KEY!, data.username);
    history.push('/');
  }

  // TODO: extract back button to another component
  function back() {
    history.goBack();
  }

  return (
    <div className={style['login']}>
      <form onSubmit={handleSubmit} className={style['login__form']}>
        <input type="text" name="username" onChange={handleChange} placeholder={t('username')} autoComplete="off" />
        <input type="password" name="password" onChange={handleChange} placeholder={t('password')} autoComplete="off" />
        <Button type="submit">{t('login')}</Button>
        <Button type="button" onClick={back}>
          {t('back')}
        </Button>
      </form>
    </div>
  );
};
