import { createContext, useState, useEffect } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

const AuthContext = createContext({
  user: null,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Called when component gets refreshed
  useEffect(() => {
    const userSession = parseCookies().userSession;
    setUser(userSession);
  }, [user]);

  const onLogin = (userSession) => {
    //Set JWT into browser cookie
    setUser(userSession);
    setCookie(
      null,
      'userSession',
      JSON.stringify({
        username: userSession.username,
        jwt: userSession.access_token,
      }),
      {
        maxAge: 10000, //Set same expiration time as server
        path: '/',
      },
    );
  };

  const onLogout = () => {
    //Delete JWT cookie
    destroyCookie(null, 'userSession');
    setUser(null);
  };

  const context = { user, onLogin, onLogout };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
