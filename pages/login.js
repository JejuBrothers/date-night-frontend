import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { loginAccount } from '../services/account';
import { setCookie } from 'nookies';
import AuthContext from '../stores/authContext';
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
  const router = useRouter();
  const { onLogin } = useContext(AuthContext);
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [result, setResult] = useState(null);

  const login = async (accountInfo) => {
    try {
      const res = await loginAccount(accountInfo);
      setResult(res);
      if (res.access_token && res.access_token != '') {
        onLogin(res);
        router.push('/account'); //Temporary: Redirect user to his profile page after login
      } else {
        setShowAlert(true);
      }
    } catch (err) {
      setResult(err);
      setShowAlert(true);
    }
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      login({
        username: formUsername.value,
        password: formPassword.value,
      });
    }
    setValidated(true);
  };

  const AlertMessage = () => {
    if (showAlert) {
      return (
        <Alert show={showAlert} variant='danger'>
          <p>
            Incorrect username or password. <br />
            Please verify that your information are correct and try again.
          </p>
        </Alert>
      );
    }
    return null;
  };

  return (
    <div className='content'>
      <Head>
        <title>Date Night | Login</title>
      </Head>
      <div className='a-form'>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Sign in to your account</h1>
          <br />
          <AlertMessage />
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
        </Col>
      </div>
    </div>
  );
};

export default Login;
