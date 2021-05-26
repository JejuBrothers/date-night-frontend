import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { loginAccount } from '../services/account';

import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onLogin = async (accountInfo) => {
    const res = await loginAccount(accountInfo);
    console.log(res); //TODO: Handle errorss
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
            <Form onSubmit={handleSubmit(onLogin)}>
              <Form.Group controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  {...register('email', {
                    required: 'Required',
                  })}
                />
                {errors?.email && (
                  <Alert variant='info'>
                    {errors.email.type === 'required' &&
                      'Your email is required!'}
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
