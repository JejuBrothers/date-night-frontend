import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import AuthContext from '@/context/authContext';
import useTranslation from 'next-translate/useTranslation';

const Navbar = () => {
  const { user, onLogout } = useContext(AuthContext);
  const { t } = useTranslation();

  return (
    <nav>
      <div className='container mx-auto px-6 py-5 pb-5 flex justify-between items-center border-b-2 border-pink-700'>
        <div className='flex px-6 mb-2'>
          <a className='text-pink-700 font-bold text-2xl lg:text-4xl'>
            {t('common:title_date')}
          </a>
          <img className='w-10 h-10' src='/wine.png' alt='logo' />
          <a className='text-pink-700 font-bold text-2xl lg:text-4xl'>
            {t('common:title_night')}
          </a>
        </div>
        <div className='block'>
          <ul className='inline-flex space-x-5 justify-between'>
            <li>
              <Link href='/'>
                <a className='px-4 font-medium text-gray-200 hover:bg-gray-700 py-2 rounded-md'>
                  {t('common:navbar_home')}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/team'>
                <a className='px-4 font-medium text-gray-200 hover:bg-gray-700 py-2 rounded-md'>
                  {t('common:navbar_team')}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a className='px-4 font-medium text-gray-200 hover:bg-gray-700 py-2 rounded-md'>
                  {t('common:navbar_about')}
                </a>
              </Link>
            </li>
            {!user && (
              <li>
                <Link href='/login'>
                  <a className='px-4 py-2 font-bold text-gray-800 bg-pink-500 hover:bg-pink-700 rounded-md'>
                    {t('common:navbar_signin')}
                  </a>
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link href='/account'>
                  <a className='px-4 font-medium text-gray-200 hover:bg-gray-700 py-2 rounded-md'>
                    {t('common:navbar_account')}
                  </a>
                </Link>
              </li>
            )}
            {user && (
              <li onClick={onLogout}>
                <Link href='/'>
                  <a className='px-4 font-bold text-pink-500 hover:bg-gray-700 py-2 rounded-md'>
                    {t('common:navbar_logout')}
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
