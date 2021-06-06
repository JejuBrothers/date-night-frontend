import Layout from '@/components/Layout';
import useTranslation from 'next-translate/useTranslation';

const Account = () => {
  const { t } = useTranslation();
  return (
    <Layout title={t('account:title')}>
      <div className='container mx-auto py-12 px-4 px-6 py-16 px-8 items-center'>
        <h2 className='space-y-3'>
          <span className='block font-bold text-4xl text-center text-pink-600'>
            {t('account:content_title')}
          </span>
        </h2>
      </div>
    </Layout>
  );
};

export default Account;
