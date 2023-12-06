import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { COLORS } from '../../constants';
import FillButton from '../../components/FillButton';
import Toast from 'react-native-toast-message';

const Register = () => {
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


  const onChangePhone = (number) => {
    setPhoneNumber(number)
    console.log('+263' + number);
    phone = number
  }

  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error logging in',
      text2: 'Please enter correct phone number',
      visibilityTime: 2000
    })
  }




  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={[tw`h-full `]}>
      <SafeAreaView style={[tw`m-4 h-full flex-1`]}>
        <BackButton />

        <View style={[tw`mt-16`]}>
          <View style={[tw``]}>
            <Text style={[tw`text-2xl font-bold`]}>Let's get started!</Text>
            <Text style={[tw`text-sm text-gray-400`]}>
              Enter your number to create an account
            </Text>
          </View>

          <View style={[tw`flex flex-row items-center`]}>
            <Text style={{ marginRight: 8, fontWeight: 'bold' }}>{"+263 |"}</Text>
            <TextInput
              style={[styles.input, tw``]}
              placeholder="778 191 278"
              focusable={true}
              keyboardType='number-pad'
              value={phoneNumber}
              onChangeText={onChangePhone}
            />

          </View>
          <View>
            {
              errors.phoneNumber ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.phoneNumber}</Text> : null
            }
          </View>

          <View style={[tw`my-4 flex-row`, { gap: 8 }]}>
            <Text style={[tw`text-gray-400`]}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[tw``, { color: `${COLORS.primary}` }]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[tw`absolute bottom-12 w-full`]}>
          <FillButton
            name={'Submit number'}
            onPress={() => handleSubmit()}
          />
        </View>
      </SafeAreaView>
      <Toast />
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
    width: '90%'
  },
});
