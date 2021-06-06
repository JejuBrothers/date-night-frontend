import Link from 'next/link';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('common:title_not_found')}</title>
      </Head>
      <div className='content'>
        <div className='not-found'>
          <h1>{t('common:content_not_found')}</h1>
          <h2>{t('common:content_not_found_notice')}</h2>
          <br />
          <p>
            {t('common:content_not_found_return')}
            <Link href='/'>
              <a>{t('common:content_not_found_homepage')}</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
