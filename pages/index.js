import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('home:title')}</title>
      </Head>
      <div className='content'>
        <h1 className={styles.title}>{t('home:content_title')}</h1>
        <br />
        <p className={styles.text}>{t('home:content_text')}</p>
        <p className={styles.text}>{t('home:content_text2')}</p>
        <br />
        <Link href='/register'>
          <a className={styles.btn}>{t('home:button_signup')}</a>
        </Link>
      </div>
    </>
  );
}
