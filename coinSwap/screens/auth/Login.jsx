import React, { useState } from 'react';
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

const Login = props => {
  // const {navigation} = props;
  const navigation = useNavigation();

  const Email = () => {
    return (
      <View style={[tw``]}>
        <View>
          <TextInput style={styles.input} placeholder="Email" />
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

      </View>
    );
  };

  const Phone = () => {
    return (
      <View style={[tw`w-full`]}>
        <View style={[tw``]}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            focusable={true}
            keyboardType='number-pad'
          />
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


      </View>
    );
  };

  const [isPhone, setIsPhone] = useState(true);

  return (
    <KeyboardAvoidingView
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

          <View style={[tw`w-full absolute bottom-12`]}>
            {/******************** LOGIN BUTTON *********************/}

            <FillButton
              name={'Login'}
              onPress={() => navigation.navigate('Code')}
            />
          </View>
        </View>
      </SafeAreaView>
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
    height: 55,
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
