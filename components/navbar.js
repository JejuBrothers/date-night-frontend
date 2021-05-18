import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>Date Night</h1>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/login'>
        <a>Login</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
