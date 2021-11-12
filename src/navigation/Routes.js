import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Routes = () => {
    const {user, setUser} = useContext(AuthContext);

    const onAuthStateChanged = (user) => {
      setUser(user);
    };
  
    useEffect(() => {
      auth().onAuthStateChanged(onAuthStateChanged);
    }, []);
   
    return (
      <NavigationContainer>
        {user ? <MainStack /> : <AuthStack/>}
      </NavigationContainer>
    );
  };

  export default Routes;