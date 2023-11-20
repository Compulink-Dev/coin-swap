import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {COLORS, ROUTES} from '../constants';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const Merchant = () => {
  // const {navigation} = props;
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <TextInput style={styles.input} placeholder="Company Name" />
        <TextInput style={styles.input} placeholder="Phone number" />

        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm Password"
        />

        <View style={[tw`my-4`]}>
          <Text style={[tw`text-xs text-center text-gray-400 mb-2`]}>
            By selecting Agree and continue below, I agree to Compulink's
          </Text>
          <View style={[tw`flex-row justify-center`, {gap: 4}]}>
            <TouchableOpacity>
              <Text
                style={[
                  tw`text-xs border-b-2 border-blue-400`,
                  {color: `${COLORS.primary}`},
                ]}>
                Term's & Conditions
              </Text>
            </TouchableOpacity>
            <Text style={[tw`text-xs text-gray-400`]}>and</Text>
            <TouchableOpacity>
              <Text
                style={[
                  tw`text-xs border-b-2 border-blue-400`,
                  {color: `${COLORS.primary}`},
                ]}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.loginBtnWrapper}>
          {/******************** LOGIN BUTTON *********************/}

          <TouchableOpacity
            style={[
              tw`px-2 py-4 rounded-full `,
              {backgroundColor: `${COLORS.primary}`},
            ]}
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
            activeOpacity={0.7}>
            <Text style={[tw`text-center text-white font-bold `]}>
              Agree and continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Merchant;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
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
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
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
