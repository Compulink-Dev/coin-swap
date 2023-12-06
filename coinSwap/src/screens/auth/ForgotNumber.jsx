import { View, Text, SafeAreaView, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import BackButton from '../../components/BackButton';
import tw from 'tailwind-react-native-classnames';
import FormInput from '../../components/FormInput';
import FillButton from '../../components/FillButton';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const ForgotNumber = () => {
  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState()
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}

    if (!phoneNumber) errors.phoneNumber = 'Phone number is required'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submitted', phoneNumber);
      setPhoneNumber('')
      setErrors({})
      navigation.navigate('OtpCode')
    }
    else {
      showErrorToast()
    }
  }


  const onChangePhone = (phoneNumber) => {
    setPhoneNumber(phoneNumber)
    console.log('+263' + phoneNumber);
    phone = phoneNumber
  }

  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error in sending credits',
      text2: 'Please fill in the detail below',
      visibilityTime: 2000
    })
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={[tw`h-full `]}>
      <SafeAreaView style={tw`m-4 h-full flex-1`}>
        <BackButton />
        <View style={tw`mt-12 flex justify-center items-center mt-20`}>
          <Image
            source={require('../../assets/phone.png')}
            style={tw`w-36 h-36`}
          />
        </View>
        <View style={tw`mt-10`}>
          <FormInput
            name={'Enter Recovery Phone Number'}
            onChange={onChangePhone}
          />
        </View>
        <View>
          {
            errors.phoneNumber ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.phoneNumber}</Text> : null
          }
        </View>
        <View style={tw`absolute bottom-6 w-full`}>
          <FillButton
            name={'Recover Number'}
            onPress={handleSubmit}
          />
        </View>
      </SafeAreaView>
      <Toast />
    </KeyboardAvoidingView>
  );
};

export default ForgotNumber;
