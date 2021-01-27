import React from 'react';

import clsx from 'clsx';

import { Button } from 'src/components';
import style from 'src/pages/home-example/home.module.scss';
import { IClassNameProp } from 'src/types';

export interface IButtonLanguageProps extends IClassNameProp {
  lng: string;
  handleClick: (lng: string) => void;
}

export const ButtonLanguage: React.FC<IButtonLanguageProps> = ({ children, handleClick, lng, className }) => {
  function handChangeLanguage() {
    handleClick(lng);
  }

  return (
    <Button className={clsx(className, style['home__buttons__item'])} onClick={handChangeLanguage}>
      {children}
    </Button>
  );
};
