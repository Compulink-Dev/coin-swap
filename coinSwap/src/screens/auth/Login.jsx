import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import BottomNavigation from '../../navigation/BottomNavigation';
import FillButton from '../../components/FillButton';
import BackButton from '../../components/BackButton';
import { COLORS } from '../../constants';
import { AuthContext } from '../../context/auth-provider';
import Toast from 'react-native-toast-message';


const Login = props => {
  // const {navigation} = props;
  const navigation = useNavigation();


  const Email = ({ mail }) => {


    const [email, setEmail] = useState()
    const [errors, setErrors] = useState({})

    const validateForm = () => {
      let errors = {}

      if (!email) errors.email = 'Email is required'

      setErrors(errors)

      return Object.keys(errors).length === 0
    }

    const handleSubmit = () => {
      if (validateForm()) {
        console.log('Submitted', email);
        setEmail('')
        setErrors({})
        navigation.navigate('Code')
      }
      else {
        showErrorToast()
      }
    }

    const onChangeEmail = (email) => {
      setEmail(email)
      console.log(email);
    }

    const showErrorToast = () => {
      Toast.show({
        type: 'error',
        text1: 'Error logging in',
        text2: 'Please enter correct email',
        visibilityTime: 2000
      })
    }

    return (
      <View style={[tw``]}>
        <View>
          <TextInput
            style={[styles.input, tw`w-full`]}
            placeholder="Email"
            secureTextEntry={false}
            value={email}
            onChangeText={onChangeEmail}
          />
          {
            errors.email ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.email}</Text> : null
          }
        </View>
        {/***************** FORGOT PASSWORD BUTTON *****************/}
        <View style={[tw`flex items-start w-full`]}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ForgotEmail', {
                userId: 'X0001',
              })
            }
            style={styles.forgotPassBtn}>
            <Text
              style={[
                tw`text-center font-bold mt-4`,
                { color: `${COLORS.primary}` },
              ]}>
              Lost access to my email ?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[tw`w-full pt-32`]}>
          {/******************** LOGIN BUTTON *********************/}

          <FillButton
            name={'Login'}
            onPress={() => {
              handleSubmit()
            }}
          />
        </View>

      </View>
    );
  };

  const Phone = ({ phone }) => {


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
        navigation.navigate('Code')
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
        text2: 'Please enter the correct phone number',
        visibilityTime: 2000
      })
    }

    const showSuccessToast = () => {
      Toast.show({
        type: 'success',
        text1: 'Credit payment successful',
        text2: 'Transaction finished successfully',
        visibilityTime: 2000
      })
    }


    return (
      <View style={[tw`w-full`]}>
        <View style={[tw`flex flex-row items-center`]}>
          <Text style={{ marginRight: 8, fontWeight: 'bold', color: 'black' }}>{"+263 |"}</Text>
          <TextInput
            style={[styles.input, tw``, { color: 'black' }]}
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

        {/***************** FORGOT PASSWORD BUTTON *****************/}
        <View style={[tw`flex items-start w-full `]}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ForgotNumber', {
                userId: 'X0001',
              })
            }
            style={styles.forgotPassBtn}>
            <Text
              style={[
                tw`text-center  font-bold mt-4`,
                { color: `${COLORS.primary}` },
              ]}>
              Lost access to my phone number ?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[tw`w-full pt-32`]}>
          {/******************** LOGIN BUTTON *********************/}

          <FillButton
            name={'Login'}
            onPress={() => {
              handleSubmit()
            }}
          />
        </View>


      </View>
    );
  };

  const [isPhone, setIsPhone] = useState(true);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={20}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={[tw`h-full `]}>
      <SafeAreaView style={[tw`relative`, styles.main]}>
        <View style={[tw``, styles.container]}>
          <View
            style={[
              tw`absolute top-3 left-3 py-2 px-3 rounded-tl-3xl rounded-br-3xl `,
            ]}>
            <BackButton />
          </View>
          <View style={styles.wFull}>
            <View style={styles.row}>
              <Image
                source={require('../../assets/transfer.png')}
                style={[tw`w-44 h-44`]}
              />
            </View>
            <View style={[tw`flex-row justify-center py-8 `]}>
              <TouchableOpacity
                style={[
                  tw` px-4 py-2 rounded-tl-3xl rounded-bl-3xl`,
                  { backgroundColor: `${COLORS.primary}` },
                ]}
                onPress={() => setIsPhone(true)}>
                <Text style={[tw`text-white font-bold`]}>Phone Number</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  tw` px-4 py-2 rounded-tr-3xl rounded-br-3xl`,
                  { backgroundColor: `${COLORS.primary}` },
                ]}
                onPress={() => setIsPhone(false)}>
                <Text style={[tw`text-white font-bold`]}>Email</Text>
              </TouchableOpacity>
            </View>
            {isPhone ? <Phone /> : <Email />}
          </View>


        </View>
      </SafeAreaView>
      <Toast />
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#de9a35',
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: '#666666',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    height: 50,
    width: '90%',
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: '#de9a35',
    textAlign: 'end',
    fontWeight: 'bold',
    marginTop: 2,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: '#666666',
    fontWeight: 'bold',
  },
  signupBtn: {
    color: '#de9a35',
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
});
