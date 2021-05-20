import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister() {
    const registerInfo = {
      username: username,
      email: email,
      password: password,
    };

    const register = await fetch(`/auth/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerInfo),
    });

    //const registerResponse = await register.json();
    //console.log(registerResponse);
  }
  return (
    <>
      <Head>
        <title>Date Night | Sign Up</title>
      </Head>
      <div>
        <h1>Register Page</h1>
        <form>
          <input
            type='text'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder='Username'
          />
          <br />
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Email'
          />
          <br />
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Password'
          />
          <br />
          <button type='button' onClick={() => handleRegister()}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
