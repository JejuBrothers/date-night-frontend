import Router from 'next/router';
import { parseCookies } from 'nookies';
import { AuthContextProvider } from '@/context/authContext';
import '@/styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

function redirectUser(ctx, location) {
  if (ctx && ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const userSession = parseCookies(ctx).userSession;

  if (Component.getInitialProps) {
    pageProps = Component.getInitialProps(ctx);
  }

  if (userSession) {
    //User session found
    if (
      ctx.pathname === '/' ||
      ctx.pathname === '/register' ||
      ctx.pathname === '/login'
    ) {
      redirectUser(ctx, '/account');
    }
  } else {
    //User session not found
    if (ctx.pathname === '/account' || ctx.pathname === '/partner') {
      redirectUser(ctx, '/login');
    }
  }
  return { pageProps };
};

export default MyApp;
