import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import BackButton from '../../components/BackButton';
import FormInput from '../../components/FormInput';
import FillButton from '../../components/FillButton';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const ForgotEmail = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`m-4 h-full flex-1`}>
      <BackButton />
      <View style={tw`mt-12 flex justify-center items-center mt-20`}>
        <Image
          source={require('../../assets/mail.png')}
          style={tw`w-36 h-36`}
        />
      </View>
      <View style={tw`mt-10`}>
        <FormInput name={'Enter Recovery Email'} />
      </View>
      <View style={tw`absolute bottom-6 w-full`}>
        <TouchableOpacity
          style={tw`mt-10`}
          onPress={() => navigation.navigate('OtpCode')}>
          <FillButton name={'Recover Email'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotEmail;
