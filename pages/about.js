import Layout from '@/components/Layout';
import useTranslation from 'next-translate/useTranslation';

const About = () => {
  const { t } = useTranslation();
  return (
    <Layout title={t('about:title')}>
      <div className='container mx-auto py-12 px-4 px-6 py-16 px-8 items-center'>
        <h2 className='space-y-3'>
          <span className='block font-bold text-4xl text-center text-pink-600'>
            {t('about:content_title')}
          </span>
          <span className='block pt-10 text-2xl text-center text-gray-200'>
            {t('about:content_text')}
          </span>
          <span className='block text-1xl text-center text-gray-300'>
            {t('about:content_subtext')}
          </span>
        </h2>
      </div>
    </Layout>
  );
};

export default About;
