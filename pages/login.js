import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { loginAccount } from '../services/account';
import { setCookie } from 'nookies';
import AuthContext from '../stores/authContext';
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
  const router = useRouter();
  const { onLogin } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const login = async (accountInfo) => {
    try {
      const res = await loginAccount(accountInfo);
      if (res.access_token && res.access_token != '') {
        onLogin(res);
        router.push('/account'); //Temporary: Redirect user to his profile page after login
      } else {
        console.log('Error'); //TODO: Handle error cases
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='content'>
      <Head>
        <title>Date Night | Login</title>
      </Head>
      <div className='a-form'>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Sign in to your account</h1>
            <br />
            <Form onSubmit={handleSubmit(login)}>
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
    </div>
  );
};

export default Login;
