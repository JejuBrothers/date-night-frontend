import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import AuthContext from '../context/authContext';
import useTranslation from 'next-translate/useTranslation';

const Navbar = () => {
  const { user, onLogout } = useContext(AuthContext);
  const { t } = useTranslation();
  return (
    <nav>
      <div className='logo'>
        <Link href='/'>
          <a>
            <Image src='/logo.png' width={200} height={80} />
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href='/'>
            <a>{t('common:navbar_home')}</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>{t('common:navbar_about')}</a>
          </Link>
        </li>
        {!user && (
          <li>
            <Link href='/login'>
              <a>{t('common:navbar_signin')}</a>
            </Link>
          </li>
        )}
        {!user && (
          <li>
            <Link href='/register'>
              <a>{t('common:navbar_signup')}</a>
            </Link>
          </li>
        )}
        {user && (
          <li>
            <Link href='/account'>
              <a>{t('common:navbar_account')}</a>
            </Link>
          </li>
        )}
        {user && (
          <li onClick={onLogout}>
            <Link href='/'>
              <a>{t('common:navbar_logout')}</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
