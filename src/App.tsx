import React from 'react';
import { useSelector } from 'react-redux';
import Counter from 'components/Counter';
import Header from 'components/Header';
import Auth from 'components/Auth';
import UserProfile from 'components/UserProfile';
import { State } from 'store';

function App() {
  const isAuth = useSelector<State, boolean>(
    (state) => state.auth.isAuthenticated,
  );

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}

      <Counter />
    </>
  );
}

export default App;
