import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNaviagation } from './navigation';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <AuthNaviagation />
    </NavigationContainer>
  );
}