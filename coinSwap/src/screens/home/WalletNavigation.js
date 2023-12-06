import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Wallet,
  SendRegistered,
  SendMoney,
  SendCredits,
  Payment,
  SendUnregistered,
} from '../screens';

const Stack = createStackNavigator();

const WalletNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Wallet'}
        component={Wallet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'SendRegistered'}
        component={SendRegistered}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'SendUnregistered'}
        component={SendUnregistered}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'SendMoney'}
        component={SendMoney}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'SendCredits'}
        component={SendCredits}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Payment'}
        component={Payment}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default WalletNavigation;
