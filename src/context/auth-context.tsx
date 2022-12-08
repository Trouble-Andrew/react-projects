import React, { useEffect, useState } from 'react';

export interface AuthContextInterface {
  isLoggedIn: boolean;
  onLogout: () => void;
  onLogin: (email: string, password: string) => void;
}

export interface AuthContextProviderProps
  extends React.ComponentPropsWithoutRef<'div'> {}

const AuthContext = React.createContext<AuthContextInterface>({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = (email: string, password: string) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const initialAuthContext: AuthContextInterface = {
    isLoggedIn: isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  };

  return (
    <AuthContext.Provider value={initialAuthContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
