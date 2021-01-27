import React from 'react';

import { I18N_WHITELIST } from 'src/const';

import { useHandleLanguage } from '../../hooks/use-custom-translation';
import { ButtonLanguage } from '../button-language';

export const ButtonLanguageList = () => {
  const { t, changeLanguage } = useHandleLanguage();

  return (
    <>
      {I18N_WHITELIST.map((item) => {
        return (
          <ButtonLanguage key={item} lng={item} handleClick={changeLanguage}>
            {t(item)}
          </ButtonLanguage>
        );
      })}
    </>
  );
};
