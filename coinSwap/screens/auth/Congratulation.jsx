import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants';
import BackButton from '../../components/BackButton';
import FillButton from '../../components/FillButton';

const Congratulation = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[tw`m-4 h-full`]}>
      <BackButton />

      <View style={[tw`mt-16`]}>
        <View style={[tw``]}>
          <Text style={[tw`text-2xl font-bold`]}>
            Congratulations! You're Almost ready to join the app
          </Text>
          <Text style={[tw` text-gray-400 mt-4`]}>
            Thank you for joining. Leave your email below and we'll let you know
            as soon as your account is already for you to sign up. New customer
            are opening their accounts everyday
          </Text>
        </View>

        <View style={[tw`mt-20 flex justify-center items-center`]}>
          <Image
            source={require('../../assets/money.png')}
            style={[tw`w-48 h-48`]}
          />
        </View>
      </View>

      <View style={[tw`absolute bottom-20 w-full`]}>
        <FillButton
          name={'Leave your email'}
          onPress={() => navigation.navigate('Email')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Congratulation;

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
