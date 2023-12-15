import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useContext, useState, useEffect, useRef } from 'react';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import FillButton from '../../components/FillButton';
import { AuthContext } from '../../context/auth-context';
import Toast from 'react-native-toast-message';
import { COLORS } from '../../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Email = () => {
  const navigation = useNavigation();

  const { test } = useContext(AuthContext)


  const [name, setName] = useState('')
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);


  const [surname, setSurname] = useState('')
  const [validSurname, setValidSurname] = useState(false);
  const [surnameFocus, setSurnameFocus] = useState(false);


  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);


  const [errors, setErrors] = useState({})

  // Refs
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const SURNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const EMAIL_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

  const validateForm = () => {
    let errors = {}

    if (!name) errors.name = 'Please enter your name'
    if (!surname) errors.surname = 'Please enter your surname'
    if (!email) errors.email = 'Email is required'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    if (validateForm()) {
      console.log('Submitted', email);
      setEmail('')
      setName('')
      setSurname('')
      setErrors({})
      navigation.navigate('Password')
      e.preventDefault()
    }
    else {
      showErrorToast()
    }
  }

  const onChangeName = (name) => {
    setName(name)
    console.log(name);
  }

  const onChangeSurname = (surname) => {
    setSurname(surname)
    console.log(surname);
  }

  const onChangeEmail = (email) => {
    setEmail(email)
    console.log(email);
  }

  const showErrorToast = () => {

    if (!name) {
      Toast.show({
        type: 'error',
        text1: 'Error in checking in ',
        text2: 'Please enter your name',
        visibilityTime: 2000
      })
    }

    if (!surname) {
      Toast.show({
        type: 'error',
        text1: 'Error in checking in ',
        text2: 'Please enter your surname',
        visibilityTime: 2000
      })
    }


    if (!email) {
      Toast.show({
        type: 'error',
        text1: 'Error in checking in ',
        text2: 'Please enter your email',
        visibilityTime: 2000
      })
    }

    if (!email && !surname) {
      Toast.show({
        type: 'error',
        text1: 'Error in checking in ',
        text2: 'Please enter surname and email',
        visibilityTime: 2000
      })
    }

    if (!name && !email && !surname) {
      Toast.show({
        type: 'error',
        text1: 'Error in checking in ',
        text2: 'Please fill in the details below',
        visibilityTime: 2000
      })
    }
  }

  useEffect(() => {
    nameRef.current.focus();
  }, [])

  useEffect(() => {
    setValidName(NAME_REGEX.test(name));
    setValidSurname(SURNAME_REGEX.test(surname));
    setValidEmail(EMAIL_REGEX.test(email));
  }, [name, surname, email])

  useEffect(() => {
    setErrMsg('');
  }, [name, surname, email])


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={[tw`h-full `, styles.container]}>
      <SafeAreaView style={[tw`m-4 h-full`]}>
        <BackButton />

        <View style={[tw`mt-16`]}>
          <View style={[tw``, styles.title]}>
            <Text style={[tw`text-2xl font-bold`, { color: COLORS.primary }]}>Let's get started!</Text>
            <Text style={[tw` text-gray-400`]}>Enter your name and email address</Text>
            <Text>{test}</Text>
          </View>

          <View style={styles.inputWrapper}>
            <View>
              <TextInput
                id={'name'}
                ref={nameRef}
                value={name}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                style={[styles.input, { borderColor: errors.name ? "red" : COLORS.gray }]} placeholder="Name" onChangeText={onChangeName} placeholderTextColor={errors.name ? "red" : COLORS.gray} />
              {
                errors.name ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.name}</Text> : null
              }
            </View>
            <View>
              <TextInput ref={surnameRef} value={surname} style={[styles.input, { borderColor: errors.surname ? "red" : COLORS.gray }]} placeholder="Surname" onChangeText={onChangeSurname} placeholderTextColor={errors.name ? "red" : COLORS.gray} />
              {
                errors.surname ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.surname}</Text> : null
              }
            </View>
            <View>
              <TextInput ref={emailRef} style={[styles.input, { borderColor: errors.email ? "red" : COLORS.gray }]} value={email} placeholder="Email" onChangeText={onChangeEmail} placeholderTextColor={errors.name ? "red" : COLORS.gray} />
              {
                errors.email ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors.email}</Text> : null
              }
            </View>
            <View style={[tw`my-4 flex-row`, { gap: 8 }]}>
              <Text style={{ color: COLORS.gray }}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[tw``, { color: `${COLORS.primary}` }]}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={[tw`absolute bottom-20 w-full`]}>
          <FillButton
            name={'Continue'}
            onPress={() => handleSubmit()}
          />
        </View>

      </SafeAreaView>
      <Toast />
    </KeyboardAvoidingView>
  );
};

export default Email;

const styles = StyleSheet.create({
  container: {
    height: hp(100)
  },
  title: {
    height: hp(10)
  },
  inputWrapper: {
    height: hp(40)
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
    color: COLORS.dark,
  },
});
