import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useTranslation from 'next-translate/useTranslation';

const Account = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('account:title')}</title>
      </Head>
      <div className='content'>
        <h1 className={styles.title}>{t('account:content_title')}</h1>
      </div>
    </>
  );
};

export default Account;
