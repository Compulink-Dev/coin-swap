import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import {COLORS} from '../constants';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        tw`absolute top-0 left-0 py-2 px-3 rounded-tl-3xl rounded-br-3xl `,
        {backgroundColor: `${COLORS.primary}`},
      ]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={[tw`text-center text-white font-bold`]}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
