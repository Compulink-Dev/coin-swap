import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { COLORS } from '../../constants';
import FillButton from '../../components/FillButton';

const Register = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`m-4 h-full flex-1`]}>
      <BackButton />

      <View style={[tw`mt-16`]}>
        <View style={[tw``]}>
          <Text style={[tw`text-2xl font-bold`]}>Let's get started!</Text>
          <Text style={[tw`text-sm text-gray-400`]}>
            Enter your number to create an account
          </Text>
        </View>

        <View>
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            placeholder="Phone Number"
          />
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
          onPress={() => navigation.navigate('OtpCode')}
        />
      </View>
    </SafeAreaView>
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
  },
});
