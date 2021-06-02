import Head from 'next/head';
import styles from '../styles/Home.module.css';

const About = () => {
  return (
    <>
      <Head>
        <title>Date Night | About</title>
      </Head>
      <div className='content'>
        <h1 className={styles.title}>About Date Night</h1>
        <br />
        <p className={styles.text}>
          Date Night is a mini project currently being developed by
          JejuBrothers' team.
        </p>
        <p className={styles.text}>
          The source code can be found on{' '}
          <a href='https://github.com/JejuBrothers'>GitHub</a>
        </p>
        <br />
      </div>
    </>
  );
};

export default About;
