import React from 'react';
import 'react-native-gesture-handler';
import { AuthProvider } from './context/auth-provider';
import AppNavigation from './navigation/AppNavigation';

export default function App() {


  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
