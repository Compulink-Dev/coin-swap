import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Transaction,
  Transactions,
  AddUser,
  Home,
  SendRegistered,
  SendUnregistered,
  SendMoney,
  SendCredits,
  PayCredits,
} from '../screens';
import WalletNavigation from './WalletNavigation';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Transaction'}
        component={Transaction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Transactions'}
        component={Transactions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'WalletNavigation'}
        component={WalletNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SendRegistered'}
        component={SendRegistered}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SendUnregistered'}
        component={SendUnregistered}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SendMoney'}
        component={SendMoney}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SendCredits'}
        component={SendCredits}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'PayCredits'}
        component={PayCredits}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'AddUser'}
        component={AddUser}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
