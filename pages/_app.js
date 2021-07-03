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
  let userSession = {};

  try {
    userSession = JSON.parse(parseCookies(ctx).userSession);
  } catch (e) {}

  if (Component.getInitialProps) {
    pageProps = Component.getInitialProps(ctx);
  }

  if (userSession && userSession.jwt) {
    //userSession && jwt found
    if (
      ctx.pathname === '/' ||
      ctx.pathname === '/register' ||
      ctx.pathname === '/login'
    ) {
      redirectUser(ctx, '/profile');
    }
  } else {
    //userSession or jwt not found
    if (ctx.pathname === '/profile' || ctx.pathname === '/partner') {
      redirectUser(ctx, '/login');
    }
  }
  return { pageProps };
};

export default MyApp;
