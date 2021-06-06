import Link from 'next/link';
import Layout from '@/components/Layout';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout title={t('home:title')}>
      <div className='container mx-auto py-12 px-4 px-6 py-16 px-8 justify-between'>
        <div className='space-x-10 flex justify-between items-center'>
          <div className='inline-block'>
            <h2 className='space-y-3 font-bold tracking-tight text-gray-200 text-4xl'>
              <span className='block'>{t('home:content_title')}</span>
              <span className='block'>{t('home:content_text')}</span>
              <span className='block font-medium text-pink-600 pt-12'>
                {t('home:content_text2')}
              </span>
            </h2>
            <div className='pt-10'>
              <Link href='/register'>
                <a className='px-5 py-3 font-bold rounded-md text-gray-800 bg-pink-500 hover:bg-pink-700'>
                  {t('home:button_signup')}
                </a>
              </Link>
            </div>
          </div>
          <div className='inline-block px-10'>
            <img
              className='w-300 h-500 rounded-full'
              src='https://images.unsplash.com/photo-1612434644608-cc99f79cd818?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
              alt='Date Night'
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
