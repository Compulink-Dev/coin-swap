import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {COLORS} from '../constants';

const FillButton = ({name, onPress, styles}) => {
  return (
    <TouchableOpacity
      style={[
        tw`px-4 py-2 rounded-full w-full `,
        {backgroundColor: `${COLORS.primary}`},
      ]}
      onPress={onPress}>
      <Text style={[tw`text-white text-center font-bold`]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default FillButton;
