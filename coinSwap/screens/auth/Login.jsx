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
import { AuthContext } from '../../context/auth-context';
import Toast from 'react-native-toast-message';
import flag from '../../assets/flag.png'
import Icon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const Login = props => {
  // const {navigation} = props;
  const navigation = useNavigation();


  const Email = ({ mail }) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    const validateForm = () => {
      let errors = {}

      if (!email) errors.email = 'Email is required'
      if (!password) errors.password = 'Password is required'

      setErrors(errors)

      return Object.keys(errors).length === 0
    }

    const handleSubmit = () => {
      if (validateForm()) {
        console.log('Submitted', email);
        setEmail('')
        setPassword('')
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

    const onChangePassword = (password) => {
      setPassword(password)
      console.log(password);
    }


    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const showErrorToast = () => {
      if (!email) {
        Toast.show({
          type: 'error',
          text1: 'Error logging in',
          text2: 'Please enter correct email',
          visibilityTime: 2000
        })
      }

      if (!password) {
        Toast.show({
          type: 'error',
          text1: 'Error logging in',
          text2: 'Please enter correct password',
          visibilityTime: 2000
        })
      }

      if (!email && !password) {
        Toast.show({
          type: 'error',
          text1: 'Error logging in',
          text2: 'Please fill in the detail below',
          visibilityTime: 2000
        })
      }
    }

    useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
      setErrMsg('');
    }, [user, pwd, matchPwd])

    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={30}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={false}
        style={[tw`h-full`, styles.phone]}>
        <View style={[tw``]}>
          <View>
            <TextInput
              style={[styles.input, tw`w-full`, { color: COLORS.dark, borderColor: errors.email ? 'red' : COLORS.grayLight }]}
              placeholder="Email"
              secureTextEntry={false}
              value={email}
              onChangeText={onChangeEmail}
              placeholderTextColor={errors.email ? "red" : COLORS.gray}
            />
            {
              errors.email ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.email}</Text> : null
            }
          </View>
          <View>
            <TextInput
              style={[styles.input, tw`w-full`, { color: errors.email ? "red" : COLORS.dark, borderColor: errors.password ? 'red' : COLORS.grayLight }]}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={onChangePassword}
              placeholderTextColor={COLORS.gray}
            />
            {
              errors.password ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.password}</Text> : null
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

          <View style={[tw`w-full pt-20`]}>
            {/******************** LOGIN BUTTON *********************/}

            <FillButton
              name={'Login'}
              onPress={() => {
                handleSubmit()
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };


  {/**  Phone Component    */ }

  const Phone = ({ phone }) => {


    const [phoneNumber, setPhoneNumber] = useState()
    const [errors, setErrors] = useState({})


    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

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
      <KeyboardAvoidingView
        keyboardVerticalOffset={20}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={false}
        style={[tw`h-full`, styles.phone]}>
        <View style={[tw`w-full`]}>
          <View style={{ width: "100%", paddingHorizontal: 0, paddingVertical: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{
                width: 50,
                height: 50,
                marginHorizontal: 5,
                borderBottomColor: errors.phoneNumber ? 'red' : COLORS.gray,
                borderBottomWidth: 1,
                flexDirection: "row",
                fontSize: 12
              }}>
                <View style={{ justifyContent: "center", marginRight: 5 }}>
                  <Icon name="down" color={errors.phoneNumber ? "red" : COLORS.gray} />
                </View>
                <View style={{ justifyContent: "center", marginRight: 20 }}>
                  <Image
                    source={flag}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      height: 30
                    }}
                  />
                </View>
              </TouchableOpacity>
              <View style={{ width: '85%' }}>
                <TextInput
                  style={{
                    flex: 1,
                    borderBottomColor: errors.phoneNumber ? "red" : COLORS.gray,
                    borderBottomWidth: 1,
                    height: 40,
                    fontSize: 20,
                    color: '#111',
                    width: '100%',
                    fontSize: 16
                  }}
                  placeholder='Phone number'
                  placeholderTextColor={errors.phoneNumber ? "red" : COLORS.gray}
                  keyboardType='number-pad'
                  value={phoneNumber}
                  onChangeText={onChangePhone}
                />
              </View>
            </View>
          </View>
          <View>
            {
              errors.phoneNumber ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.phoneNumber}</Text> : null
            }
          </View>

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

          <View style={[tw`w-full pt-40`]}>
            <FillButton
              name={'Login'}
              onPress={() => {
                handleSubmit()
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };

  const [isPhone, setIsPhone] = useState(true);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={20}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={[tw`h-full`, styles.phone]}>
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
                style={[tw`w-36 h-36`]}
              />
            </View>

            <View style={[tw`flex-row justify-center py-8`]}>
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

            <View style={styles.select}>
              {isPhone ? <Phone /> : <Email />}
            </View>
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
    width: wp(100),
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
  button: {
    height: hp(14)
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
    height: hp(20)
  },
  mr7: {
    marginRight: 7,
  },
  select: {
    height: hp(40)
  }
});
