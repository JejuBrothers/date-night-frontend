import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import useTranslation from 'next-translate/useTranslation';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('about:title')}</title>
      </Head>
      <div className='content'>
        <h1 className={styles.title}>{t('about:content_title')}</h1>
        <br />
        <p className={styles.text}>{t('about:content_text')}</p>
      </div>
      <div className='github-logo'>
        <a href='https://github.com/JejuBrothers'>
          <Image src='/github_logo.png' width={94} height={68} />
        </a>
      </div>
    </>
  );
};

export default About;
