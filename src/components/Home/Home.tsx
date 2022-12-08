import Button from 'components/UI/Button/Button';
import AuthContext from 'context/auth-context';
import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.scss';

const Home = () => {
  const authCtx = useContext(AuthContext);
  
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
