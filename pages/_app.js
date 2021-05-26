import Router from 'next/router';
import { parseCookies } from 'nookies';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
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
  const jwt = parseCookies(ctx).jwt;

  if (Component.getInitialProps) {
    pageProps = Component.getInitialProps(ctx);
  }

  if (jwt) {
    //User logged in
    if (ctx.pathname === '/register' || ctx.pathname === '/login') {
      redirectUser(ctx, '/account');
    }
  } else {
    //User not logged in
    if (ctx.pathname === '/account' || ctx.pathname === '/partner') {
      redirectUser(ctx, '/login');
    }
  }
  return { pageProps };
};

export default MyApp;
