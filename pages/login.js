import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { loginAccount } from '@/services/account';
import { setCookie } from 'nookies';
import AuthContext from '@/context/authContext';
import useTranslation from 'next-translate/useTranslation';

const Login = () => {
  const router = useRouter();
  const { t } = useTranslation();
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
            {t('login:form_signin_error')} <br />
            {t('login:form_signin_retry')}
          </p>
        </Alert>
      );
    }
    return null;
  };

  return (
    <div className='content'>
      <Head>
        <title>{t('login:title')}</title>
      </Head>
      <div className='a-form'>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>{t('login:content_title')}</h1>
          <br />
          <AlertMessage />
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group controlId='formUsername'>
                <Form.Label>{t('login:form_username')}</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder={t('login:form_username_placeholder')}
                />
                <Form.Control.Feedback type='invalid'>
                  {t('login:form_username_invalid')}
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group controlId='formPassword'>
                <Form.Label>{t('login:form_password')}</Form.Label>
                <Form.Control
                  required
                  type='password'
                  placeholder={t('login:form_password_placeholder')}
                />
                <Form.Control.Feedback type='invalid'>
                  {t('login:form_password_invalid')}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <br />
            <Button variant='primary' type='submit'>
              {t('login:button_signin')}
            </Button>
          </Form>
        </Col>
      </div>
    </div>
  );
};

export default Login;
