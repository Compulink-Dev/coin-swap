import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeNavigation from './HomeNavigation';
import WalletNavigation from './WalletNavigation';
import ProfileNavigation from './ProfileNavigation';
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: '#444',
                tabBarActiveTintColor: `${COLORS.primary}`,
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === 'HomeNavigation') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'WalletNavigation') {
                        iconName = focused ? 'wallet' : 'wallet-outline';
                    } else if (route.name === 'ProfileNavigation') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Icon name={iconName} size={22} color={color} />;
                },
            })}>
            <Tab.Screen
                name={'HomeNavigation'}
                component={HomeNavigation}
                options={{}}
            />
            <Tab.Screen
                name={'WalletNavigation'}
                component={WalletNavigation}
                options={{}}
            />
            <Tab.Screen
                name={'ProfileNavigation'}
                component={ProfileNavigation}
                options={{}}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigation;

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        bottom: 15,
        right: 10,
        left: 10,
        height: 92,
    },
});
