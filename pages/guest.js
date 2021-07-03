import Layout from '@/components/Layout';
import useTranslation from 'next-translate/useTranslation';

const Guest = () => {
  const { t } = useTranslation();
  return (
    <Layout title={t('guest:title')}>
      <div className='container mx-auto py-16 px-8 items-center'>
        <h2 className='space-y-3'>
          <span className='block font-bold text-4xl text-center text-pink-600'>
            {t('guest:content_title')}
          </span>
          <span className='block pt-10 text-2xl text-center text-gray-200'>
            {t('guest:content_text')}
          </span>
        </h2>
      </div>
    </Layout>
  );
};

export default Guest;
