import React, {Button} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../theme/Colors'
import fonts from '../theme/Fonts'
import ChatRooms from '../screens/ChatRooms';

const Stack = createStackNavigator();

const MainStack = (navigation) => (

  <Stack.Navigator>
    <Stack.Screen
      name="Chat rooms"
      component={ChatRooms}
      options={{
                 
        headerTitleAlign: 'center',
        headerTitleStyle: {
            color: colors.white,
            fontFamily: fonts.type.montserratRegular,
            fontSize: fonts.size.font16,
        },
        headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
        },
    }}
    />
  </Stack.Navigator>

);

export default MainStack;