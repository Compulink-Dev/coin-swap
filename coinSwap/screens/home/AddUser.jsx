import { View, Text, SafeAreaView, Image, KeyboardAvoidingView, } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import FormInput from '../../components/FormInput';
import FillButton from '../../components/FillButton';
import OutlineButton from '../../components/OutlineButton';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants';

const AddUser = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={[tw`h-full `]}>
      <SafeAreaView style={[tw`m-4 h-full`]}>
        <BackButton />
        <View style={tw`mt-8 flex-1 h-full flex flex-col justify-between h-full`}>
          <View style={tw`items-center mt-4`}>
            <Icon name='person-circle' style={[tw`text-4xl`, { color: `${COLORS.primary}` }]} />
          </View>
          <View style={[tw`flex-1`]}>
            <FormInput placeholder="First Name" />
            <FormInput placeholder="Last Name" />
            <FormInput placeholder="Email" />
            <FormInput placeholder="Phone Number" type="number-pad" />
          </View>

        </View>
        <View style={tw`flex flex-1 items-center justify-center w-full absolute bottom-12 `}>
          <View style={tw`w-full mb-4`}>
            <FillButton name="Add Merchant" />
          </View>
          <OutlineButton name="Cancel" />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AddUser;
