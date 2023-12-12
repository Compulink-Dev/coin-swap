import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile, Settings } from '../screens';

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Settings'}
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
