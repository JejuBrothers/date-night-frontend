import Router from 'next/router';
import { parseCookies } from 'nookies';
import { AuthContextProvider } from '../context/authContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
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
