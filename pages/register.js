import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { createAccount } from '@/services/account';
import useTranslation from 'next-translate/useTranslation';

const Register = () => {
  const router = useRouter();
  const { t } = useTranslation();
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
            <p>{t('register:form_signup_success')}</p>
            <hr />
            <div className='d-flex justify-content-end'>
              <Button
                onClick={() => {
                  router.push('/login');
                  setShowAlert(false);
                  setValidated(false);
                }}
                variant='outline-success'>
                {t('register:button_login')}
              </Button>
            </div>
          </Alert>
        );
      } else {
        return (
          <Alert show={showAlert} variant='danger'>
            <p>{t('register:form_signup_error')}</p>
            <hr />
            <div className='d-flex justify-content-end'>
              <Button
                onClick={() => {
                  setShowAlert(false);
                  setValidated(false);
                }}
                variant='outline-danger'>
                {t('register:button_retry')}
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
        <title>{t('register:title')}</title>
      </Head>

      <div className='a-form'>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>{t('register:content_title')}</h1>
          <br />
          <AlertMessage />
          {!showAlert && (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group controlId='formUsername'>
                  <Form.Label>{t('register:form_username')}</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder={t('register:form_username_placeholder')}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {t('register:form_username_invalid')}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group controlId='formEmail'>
                  <Form.Label>{t('register:form_email')}</Form.Label>
                  <Form.Control
                    required
                    type='email'
                    placeholder={t('register:form_email_placeholder')}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {t('register:form_email_invalid')}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group controlId='formPassword'>
                  <Form.Label> {t('register:form_password')}</Form.Label>
                  <Form.Control
                    required
                    type='password'
                    placeholder={t('register:form_password_placeholder')}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {t('register:form_password_invalid')}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <br />
              <Button variant='primary' type='submit'>
                {t('register:button_signup')}
              </Button>
            </Form>
          )}
        </Col>
      </div>
    </div>
  );
};

export default Register;
