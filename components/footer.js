import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className='container mx-auto mt-5 pt-5 pb-5 text-center border-t-2 border-pink-700'>
        <a className=' text-gray-500'>{t('common:footer_copyright')}</a>
      </div>
    </footer>
  );
};

export default Footer;
