import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { loginAccount } from '../services/account';
import { setCookie } from 'nookies';

import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onLogin = async (accountInfo) => {
    const login = await loginAccount(accountInfo);
    console.log('api called');
    if (login.hasOwnProperty('access_token')) {
      //Set JWT into browser cookie
      setCookie(null, 'jwt', login.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      //Temporary: Redirect user to his profile page after login
      router.push('/account');
    } else {
      //TODO: Handle error cases
      console.log('Error');
    }
  };

  return (
    <>
      <Head>
        <title>Date Night | Login</title>
      </Head>
      <div className='a-form'>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Sign in to your account</h1>
            <br />
            <Form onSubmit={handleSubmit(onLogin)}>
              <Form.Group controlId='formUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter username'
                  {...register('username', {
                    required: 'Required',
                  })}
                />
                {errors?.username && (
                  <Alert variant='info'>
                    {errors.username.type === 'required' &&
                      'Your username is required!'}
                  </Alert>
                )}
              </Form.Group>
              <br />
              <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  {...register('password', {
                    required: 'Required',
                  })}
                />
                {errors?.password && (
                  <Alert variant='info'>
                    {errors.password.type === 'required' &&
                      'Your password is required!'}
                  </Alert>
                )}
              </Form.Group>
              <br />
              <Button variant='primary' type='submit'>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
