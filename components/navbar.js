import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'>
          <a>
            <Image src='/logo.png' width={200} height={80} />
          </a>
        </Link>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/login'>
        <a>Login</a>
      </Link>
    </nav>
  );
};

export default Navbar;
