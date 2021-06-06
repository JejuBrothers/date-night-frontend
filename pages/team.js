import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import useTranslation from 'next-translate/useTranslation';

export default function Team() {
  const { t } = useTranslation();
  return (
    <Layout title={t('team:title')}>
      <div className='container mx-auto py-12 px-4 px-6 py-16 px-8 justify-between'>
        <h2 className='space-y-3 text-3xl font-bold tracking-tight text-gray-200'>
          <span className='block text-center'>TODO</span>
        </h2>
      </div>
    </Layout>
  );
}
