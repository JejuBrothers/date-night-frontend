import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  return <footer>{t('common:footer_copyright')}</footer>;
};

export default Footer;
