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
import FillButton from '../../components/FillButton';

const Email = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[tw`m-4 h-full`]}>
      <BackButton />
      <View style={[tw`mt-16`]}>
        <View style={[tw``]}>
          <Text style={[tw`text-2xl font-bold`]}>Email</Text>
          <Text style={[tw` text-gray-400 `]}>Enter your email address</Text>
        </View>

        <View>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
      </View>

      <View style={[tw`absolute bottom-20 w-full`]}>
        <FillButton
          name={'Continue'}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Email;

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
