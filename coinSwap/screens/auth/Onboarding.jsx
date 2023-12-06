import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants';

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[tw`h-full flex justify-center items-center`, { gap: 40 }]}>
      <View>
        <Image
          source={require('../../assets/black-logo.png')}
          style={[tw`h-14 w-56`]}
        />
      </View>
      <View style={[tw``]}>
        <Text style={[tw`text-4xl font-bold text-center text-gray-500`, { color: COLORS.primary }]}>Welcome</Text>
        <Text style={[tw`text-center text-gray-500`]}>Send and receive credits</Text>
      </View>
      <View style={[tw`w-full px-16`]}>
        <TouchableOpacity
          style={[
            tw`px-4 py-2 rounded-full`,
            { backgroundColor: `${COLORS.primary}` },
          ]}
          onPress={() => navigation.navigate('Email')}>
          <Text style={[tw`text-center text-white font-bold `]}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={[tw`flex-row items-center`, { gap: 8 }]}>
        <Text style={[tw`font-semibold text-gray-500`]}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[tw`font-bold`, { color: `${COLORS.primary}` }]}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
