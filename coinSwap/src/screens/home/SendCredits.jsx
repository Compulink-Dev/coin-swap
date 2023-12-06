import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import FillButton from '../../components/FillButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';
import OutlineButton from '../../components/OutlineButton';
import BackButton from '../../components/BackButton';

const SendCredits = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`m-4 h-full flex-1`]}>
      <BackButton />

      <View style={[tw`flex-1 justify-between items-center mt-24`]}>
        <View style={[tw`flex items-center justify-center`]}>
          <Image
            source={require('../../assets/user.png')}
            style={[tw`h-40 w-40`]}
          />
          <Text style={[tw`font-bold text-lg mt-10 text-gray-400`]}>
            Select type of user
          </Text>
        </View>
      </View>
      <View style={[tw`flex w-full flex-col absolute bottom-3`, { gap: 10 }]}>
        <FillButton
          name="Registered"
          onPress={() => navigation.navigate('SendRegistered')}
        />
        <OutlineButton
          name="Un Registered"
          onPress={() => navigation.navigate('SendUnregistered')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SendCredits;
