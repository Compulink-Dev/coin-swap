import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useRef } from 'react';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { COLORS } from '../../constants';
import FillButton from '../../components/FillButton';

const OtpCode = ({ disabled }) => {
  const navigation = useNavigation();
  const inputRefs = useRef([])

  const handleChange = (text, index) => {
    // onChangeValue(text, index)

    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus()
    }

    return inputRefs?.current[index - 1]?.focus()
  }

  return (
    <SafeAreaView style={[tw`m-4 h-full flex-1`]}>
      <BackButton />
      <View style={[tw`mt-16`]}>
        <View style={[tw``]}>
          <Text style={[tw`text-2xl font-bold`]}>6-digit code!</Text>
          <Text style={[tw`text-xs text-gray-400`]}>
            Code sent to [263] {['Number']} unless you have an account
          </Text>
        </View>

        <View style={[tw`mt-8 flex flex-row w-full justify-between`]}>
          {[...new Array(6)].map((item, index) => (
            <TextInput
              ref={ref => {
                if (ref && !inputRefs.current.includes(ref)) {
                  inputRefs.current = [...inputRefs.current, ref]
                }
              }}
              key={index}
              style={[tw`w-12 h-12 bg-white rounded text-center flex mb-4`]}
              maxLength={1}
              contextMenuHidden
              selectTextOnFocus
              editable={!disabled}
              keyboardType='decimal-pad'
              testID={`Code-${index}`}
              onChangeText={text => handleChange(text, index)}
            />
          ))}
        </View>

        <View style={[tw`my-4 `]}>
          <View style={[tw`flex-row my-4`]}>
            <TouchableOpacity>
              <Text style={[tw`text-gray-400`]}>Resend Code in </Text>
            </TouchableOpacity>
            <Text style={[tw`text-gray-700`]}>[Countdown]</Text>
          </View>
          <View style={[tw`flex-row`, { gap: 8 }]}>
            <Text style={[tw`text-gray-400`]}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[tw``, { color: `${COLORS.primary}` }]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[tw`absolute bottom-12 w-full`]}>
        <FillButton
          name={'Submit Code'}
          onPress={() => navigation.navigate('Congratulation')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OtpCode;

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
