import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { loginAccount } from '@/services/account';
import { setCookie } from 'nookies';

import Layout from '@/components/Layout';
import AuthContext from '@/context/authContext';
import useTranslation from 'next-translate/useTranslation';

const Login = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { onLogin } = useContext(AuthContext);
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

  const AlertMessage = () => {
    if (showAlert) {
      return (
        <div
          class='bg-pink-100 border-2 border-pink-400 text-pink-700 px-4 py-3 rounded relative'
          role='alert'>
          <span class='block'> {t('login:form_signin_error')}</span>
          <span class='absolute top-0 bottom-0 right-0 px-4 py-3'>
            <svg
              onClick={() => setShowAlert(false)}
              class='fill-current h-6 w-6 text-red-500'
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
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    login({
      username: username.value,
      password: password.value,
    });
  };

  return (
    <Layout title={t('login:title')}>
      <div className='container mx-auto py-12 px-4 px-6 py-16 px-8 flex items-center justify-center'>
        <div className='max-w-md w-full space-y-8'>
          <h2 className='space-y-3'>
            <span className='block font-bold text-4xl text-center text-pink-600'>
              {t('login:content_title')}
            </span>
          </h2>
          <AlertMessage />
          <form className='mt-10 space-y-6' onSubmit={handleSubmit}>
            <div className='rounded-md space-y-3'>
              <input
                id='username'
                name='username'
                type='text'
                required
                className='w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-pink-500 focus:border-pink-500'
                placeholder={t('login:form_username')}
              />
              <input
                id='password'
                name='password'
                type='password'
                required
                className='w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-pink-500 focus:border-pink-500'
                placeholder={t('login:form_password')}
              />
            </div>
            <div>
              <button
                type='submit'
                className='w-full py-2 px-4 border border-transparent font-bold rounded-md text-gray-800 bg-pink-500 hover:bg-pink-700'>
                {t('login:button_signin')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
