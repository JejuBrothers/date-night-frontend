import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { createAccount } from '../services/account';

import 'bootstrap/dist/css/bootstrap.css';

const Register = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onRegister = async (accountInfo) => {
    const res = await createAccount(accountInfo);

    if (res.hasOwnProperty('id')) {
      console.log('Account successfully created');
      router.push('/login');
    } else {
      //TODO: Handle error cases
      console.log('Error');
    }
  };

  return (
    <>
      <Head>
        <title>Date Night | Sign Up</title>
      </Head>
      <div className='a-form'>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Create your account</h1>
            <Form onSubmit={handleSubmit(onRegister)}>
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
                Sign up
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Register;
