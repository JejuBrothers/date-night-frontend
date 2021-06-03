import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import AuthContext from '../context/authContext';

const Navbar = () => {
  const { user, onLogout } = useContext(AuthContext);

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
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        {!user && (
          <li>
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </li>
        )}
        {!user && (
          <li>
            <Link href='/register'>
              <a>Sign Up</a>
            </Link>
          </li>
        )}
        {user && (
          <li>
            <Link href='/account'>
              <a>Account</a>
            </Link>
          </li>
        )}
        {user && (
          <li onClick={onLogout}>
            <Link href='/'>
              <a>Logout</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
