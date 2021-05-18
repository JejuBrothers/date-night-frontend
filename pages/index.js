import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Welcome</h1>
      <p className={styles.text}>Text1</p>
      <p className={styles.text}>Text2</p>
      <Link href='/register'>
        <a className={styles.btn}>Sign up</a>
      </Link>
    </div>
  );
}
