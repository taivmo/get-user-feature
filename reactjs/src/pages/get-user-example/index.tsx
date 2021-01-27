import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Button } from 'src/components';
import { getUser, IGetUser } from 'src/services/get-user';

import style from './get-user.module.scss';

export const GetUser = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<IGetUser[] | null>([]);
  const { t } = useTranslation();
  let history = useHistory();
  useEffect(() => {
    const getDataMember = async () => {
      const user = await getUser();
      console.log(user);
      setData(user.data);
    };
    getDataMember();
  }, []);
  function back() {
    history.goBack();
  }
  return (
    <div className={style['container']}>
      <div className={style['get']}>
        <div className={style['get__username']}>
          <h1 className={style['get__header']}>USER Name</h1>
          {data ? data.map((data) => <p key={data.id}>{data.name}</p>) : null}
        </div>
        <div className={style['get__user__email']}>
          <h1 className={style['get__header']}>USER Email</h1>
          {data ? data.map((data) => <p key={data.id}>{data.email}</p>) : null}
        </div>
      </div>
      <Button className={style['container__button']} type="button" onClick={back}>
        {t('back')}
      </Button>
    </div>
  );
};
