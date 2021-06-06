import Head from 'next/head';
import Corner from '@/components/Corner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Layout = ({ title, children }) => {
  return (
    <div className='bg-gray-900'>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='container mx-auto pt-4 min-h-screen font-nunito text-gray-50'>
        <Corner />
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
