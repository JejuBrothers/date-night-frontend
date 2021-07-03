import { useState } from 'react';
import { createAccount } from '@/services/auth';
import Layout from '@/components/Layout';
import useTranslation from 'next-translate/useTranslation';

const Register = () => {
  const { t } = useTranslation();
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
    event.preventDefault();
    if (password.value === confirmPassword.value) {
      onRegister({
        username: username.value,
        password: password.value,
        email: email.value,
      });
    } else {
      setShowAlert(true);
    }
  };

  const AlertMessage = () => {
    if (showAlert) {
      if (result?.id && result?.id != '') {
        return (
          <div
            className='bg-green-100 border-2 border-green-400 text-green-700 px-4 py-3 rounded items-center'
            role='alert'>
            <span className='block'>{t('register:form_signup_success')}</span>
          </div>
        );
      } else {
        return (
          <div
            className='bg-pink-100 border-2 border-pink-400 text-pink-700 px-4 py-3 rounded relative'
            role='alert'>
            <span className='block'>{t('register:form_signup_error')}</span>
            <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
              <svg
                onClick={() => setShowAlert(false)}
                className='fill-current h-6 w-6 text-red-500'
                role='button'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'>
                <title>Close</title>
                <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
              </svg>
            </span>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <Layout title={t('register:title')}>
      <div className='container mx-auto py-16 px-8 flex items-center justify-center'>
        <div className='max-w-md w-full space-y-8'>
          <h2 className='space-y-3'>
            <span className='block font-bold text-4xl text-center text-pink-600'>
              {t('register:content_title')}
            </span>
          </h2>
          <AlertMessage />
          <form className='mt-10 space-y-6' onSubmit={handleSubmit}>
            <div className='rounded-md space-y-4'>
              <input
                id='username'
                name='username'
                type='text'
                required
                className='w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-pink-500 focus:border-pink-500'
                placeholder={t('register:form_username')}
              />
              <input
                id='email'
                name='email'
                type='email'
                required
                className='w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-pink-500 focus:border-pink-500'
                placeholder={t('register:form_email')}
              />
              <input
                id='password'
                name='password'
                type='password'
                required
                className='w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-pink-500 focus:border-pink-500'
                placeholder={t('register:form_password')}
              />
              <input
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                required
                className='w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-pink-500 focus:border-pink-500'
                placeholder={t('register:form_confirm_password')}
              />
            </div>
            <div>
              <button
                type='submit'
                className='w-full py-2 px-4 border border-transparent font-bold rounded-md text-gray-800 bg-pink-500 hover:bg-pink-700'>
                {t('register:button_signup')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
