import Link from 'next/link';

const PageNotFound = () => {
  return (
    <div className='content'>
      <div className='not-found'>
        <h1>Ooooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the{' '}
          <Link href='/'>
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
