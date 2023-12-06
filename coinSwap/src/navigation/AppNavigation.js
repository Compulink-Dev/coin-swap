import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { AuthContext, AuthProvider } from '../context/auth-provider';
import { AuthNaviagation } from '.';
import { ActivityIndicator, View } from 'react-native';
import BottomNavigation from './BottomNavigation';


export default function AppNavigation() {

    const { isLoading, userToken } = useContext(AuthContext)

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }

    return (
        <AuthProvider>
            <NavigationContainer>
                {userToken !== null ? <BottomNavigation /> : <AuthNaviagation />}
            </NavigationContainer>
        </AuthProvider>
    );
}

