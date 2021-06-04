import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import useTranslation from 'next-translate/useTranslation';

const Partner = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('partner:title')}</title>
      </Head>
      <div className='content'>
        <h1 className={styles.title}>{t('partner:content_title')}</h1>
      </div>
    </>
  );
};

export default Partner;
