import { useTranslation } from 'react-i18next';

export const useHandleLanguage = () => {
  const { t, i18n } = useTranslation();

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }
  return { t, i18n, changeLanguage };
};
