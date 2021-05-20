import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Date Night | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Looking for the perfect date plan ?</h1>
        <br />
        <p className={styles.text}>
          Don't look anymore, you are at the right place !
        </p>
        <p className={styles.text}>
          Date night is the app that will save your time and your couple.
        </p>
        <br />
        <Link href='/register'>
          <a className={styles.btn}>SIGN UP</a>
        </Link>
      </div>
    </>
  );
}
