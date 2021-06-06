import Link from 'next/link';
import Layout from '@/components/Layout';
import useTranslation from 'next-translate/useTranslation';

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <Layout title={t('common:title_not_found')}>
      <div className='container mx-auto py-12 px-4 px-6 py-16 px-8 justify-between'>
        <h2 className='space-y-3 text-4xl'>
          <span className='block font-bold text-center text-pink-600 '>
            {t('common:content_not_found')}
          </span>
          <span className='block font-medium text-center text-gray-200'>
            {t('common:content_not_found_notice')}
          </span>
        </h2>
        <div className='pt-10 text-center'>
          <Link href='/'>
            <a className='px-5 py-3 font-bold rounded-md text-gray-800 bg-pink-500 hover:bg-pink-700'>
              {t('common:content_not_found_homepage')}
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
