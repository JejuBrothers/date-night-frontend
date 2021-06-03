import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { createAccount } from '../services/account';

const Register = () => {
  const router = useRouter();
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [result, setResult] = useState(null);

  const onRegister = async (accountInfo) => {
    try {
      const res = await createAccount(accountInfo);
      setResult(res);
    } catch (err) {
      setResult(err);
    }
    setShowAlert(true);
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      onRegister({
        username: formUsername.value,
        password: formPassword.value,
        email: formEmail.value,
      });
    }
    setValidated(true);
  };

  const AlertMessage = () => {
    if (showAlert) {
      if (result.id && result.id != '') {
        return (
          <Alert show={showAlert} variant='success'>
            <p>Your account has been successfully registered!</p>
            <hr />
            <div className='d-flex justify-content-end'>
              <Button
                onClick={() => {
                  router.push('/login');
                  setShowAlert(false);
                  setValidated(false);
                }}
                variant='outline-success'>
                Login
              </Button>
            </div>
          </Alert>
        );
      } else {
        return (
          <Alert show={showAlert} variant='danger'>
            <p>
              An unexpected error occurred. Please verify that your information
              are correct and try again.
            </p>
            <hr />
            <div className='d-flex justify-content-end'>
              <Button
                onClick={() => {
                  setShowAlert(false);
                  setValidated(false);
                }}
                variant='outline-danger'>
                Retry
              </Button>
            </div>
          </Alert>
        );
      }
    }
    return null;
  };

  return (
    <div className='content'>
      <Head>
        <title>Date Night | Sign Up</title>
      </Head>

      <div className='a-form'>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Create your account</h1>
          <br />
          <AlertMessage />
          {!showAlert && (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group controlId='formUsername'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Enter your username'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please enter an username.
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type='email'
                    placeholder='Enter your email'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group controlId='formPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type='password'
                    placeholder='Enter your password'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please enter a password.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <br />
              <Button variant='primary' type='submit'>
                Sign up
              </Button>
            </Form>
          )}
        </Col>
      </div>
    </div>
  );
};

export default Register;
