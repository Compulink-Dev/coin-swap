import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile, Statistics} from '../screens';

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Statistics'}
        component={Statistics}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
