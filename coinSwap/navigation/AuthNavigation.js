import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Onboarding,
  Onboarding2,
  Onboarding3,
  Login,
  Register,
  OtpCode,
  PassCode,
  ForgotEmail,
  ForgotPassword,
  ForgotNumber,
  Congratulation,
  Email,
  Code,
} from '../screens';
import { HomeNaviagation } from '.';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={Onboarding}>
      <Stack.Screen
        name={'Onboarding'}
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Onboarding2'}
        component={Onboarding2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Onboarding3'}
        component={Onboarding3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Register'}
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'OtpCode'}
        component={OtpCode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Congratulation'}
        component={Congratulation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'ForgotPassword'}
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'ForgotEmail'}
        component={ForgotEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'ForgotNumber'}
        component={ForgotNumber}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'PassCode'}
        component={PassCode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Code'}
        component={Code}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Email'}
        component={Email}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Home'}
        component={HomeNaviagation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'BottomNavigation'}
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
