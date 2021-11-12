
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import { GoogleSignin } from '@react-native-community/google-signin';
import { WEB_CLIENT_ID } from '../utils/keys';
const Stack = createStackNavigator();

const AuthStack = () => {

  useEffect(() => {
    // initialize the Google SDK
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,

    });
  }, []);

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );

};

export default AuthStack;